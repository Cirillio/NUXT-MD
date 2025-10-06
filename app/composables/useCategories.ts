import type { CategoriesCollectionItem } from "@nuxt/content";

interface CategoryNode extends CategoriesCollectionItem {
  slug: string;
  parentSlug?: string;
  children?: CategoryNode[];
}

const categoriesState = () =>
  useState<CategoryNode[]>("categories-tree", () => []);

export const useCategories = () => {
  const tree = categoriesState();

  const isLoading = ref(false);

  const fetchAndBuildTree = async () => {
    if (tree.value.length > 0 || isLoading.value) {
      return;
    }
    isLoading.value = true;

    try {
      const rawCategories = await queryCollection("categories").all();
      const topLevel: CategoryNode[] = [];
      const subCategories: CategoryNode[] = [];

      (rawCategories as CategoriesCollectionItem[]).forEach((cat) => {
        const pathMatch = cat.id.match(
          /categories\/articles\/(.+)\/_category\.md/
        );
        if (!pathMatch || !pathMatch[1]) return;

        const path = pathMatch[1];
        const parts = path.split("/");
        const depth = parts.length;

        const baseNode = { ...cat, slug: path } as CategoryNode;

        if (depth === 1) {
          topLevel.push({
            ...baseNode,
            children: [],
          });
        } else if (depth === 2) {
          baseNode.parentSlug = parts[0];
          subCategories.push(baseNode);
        }
      });

      topLevel.forEach((parent) => {
        parent.children = subCategories
          .filter((sub) => sub.parentSlug === parent.slug)
          .map((sub) => sub as CategoryNode)
          .sort((a, b) => (a.order || 0) - (b.order || 0));
      });

      tree.value = topLevel.sort((a, b) => (a.order || 0) - (b.order || 0));
    } catch (e) {
      console.error("Ошибка при загрузке категорий:", e);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    categoriesTree: computed(() => tree.value),
    fetchAndBuildTree,
    isLoading: computed(() => isLoading.value),
  };
};
