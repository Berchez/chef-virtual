import useRecipes from './useRecipes';

const Recipes = ({ recipesHtml }: { recipesHtml: string }) => {
  const { formatRecipe } = useRecipes();

  return (
    <>
      <div
        id="recipe-wrapper"
        className="text-gray-950 md:px-16 px-8 md:py-8 py-4 my-8 md:mt-8 mt-16 md:mx-[20%] mx-[5%] bg-[#d1ffe1] border border-gray-400 rounded-3xl "
        dangerouslySetInnerHTML={{
          __html: '<h1>Receita(s) gerada(s):</h1>' + formatRecipe(recipesHtml),
        }}
      />
    </>
  );
};

export default Recipes;
