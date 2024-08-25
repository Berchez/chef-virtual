const useRecipes = () => {
  const formatRecipe = (recipe: string) => {
    const withoutSlashN = recipe.replace('', ' ');
    const withoutMarkdown = withoutSlashN.replace('```', '');
    return withoutMarkdown.replace('html', '');
  };

  return { formatRecipe };
};

export default useRecipes;
