// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";
import ColumnsTable from "@site/src/components/ColumnsTable";
import CoreEntityTable from "@site/src/components/CoreEntityTable";
import RelatedEntitiesList from "@site/src/components/RelatedEntitiesList";
import RelationshipTable from "@site/src/components/RelationshipTable";
import SupportedTypesTable from "@site/src/components/SupportedTypesTable";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Mapping all custom components to be used in all MDX files
  // This prevents needing to import them in each MDX file
  ColumnsTable,
  CoreEntityTable,
  RelatedEntitiesList,
  RelationshipTable,
  SupportedTypesTable,
};
