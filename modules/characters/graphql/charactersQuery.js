import gql from "graphql-tag";

const getFilters = (filterName, filterSpecies) => {
  if (filterName && !filterSpecies) {
    return `filter: { name: "${filterName}"}`;
  }
  if (!filterName && filterSpecies) {
    return `filter: { species: "${filterSpecies}"}`;
  }
  if (filterName && filterSpecies) {
    return `filter: { name: "${filterName}", species: "${filterSpecies}"}`;
  }

  return "";
};

export const charactersQuery = (page, filterName, filterSpecies) => gql`query {
    characters(page: ${page}, ${getFilters(filterName, filterSpecies)}) {
      info {
        count
        pages
      }
      results {
        name,
        image,
        species,
        id
      }
    }
    location(id: 1) {
      id
    }    
  }      
`;
