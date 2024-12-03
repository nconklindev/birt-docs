// RelatedEntitiesList.js
type RelatedEntity = string | { name: string; isHca: boolean };

interface RelatedEntitiesListProps {
  relatedEntities: RelatedEntity[];
}

const RelatedEntitiesList = ({ relatedEntities }: RelatedEntitiesListProps) => {
  const createSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/--+/g, "-")
      .replace(/[^\w-]+/g, "");
  };

  const isHealthcareAnalyticsEntity = (entityName: string) => {
    const hcaEntities = [
      "Daily Productivity",
      "Day",
      "Pay Period Productivity",
      "Payroll",
      "Volume",
      "Volume Work Unit",
      "Work Group",
      "Work Unit"
    ];
    return hcaEntities.includes(entityName);
  };

  return (
    <ul>
      {relatedEntities.map((entity, index) => {
        const entityName = typeof entity === 'string' ? entity : entity.name;
        const isHca = typeof entity === 'string' ? isHealthcareAnalyticsEntity(entity) : entity.isHca;

        return (
          <li key={index}>
            <a href={`/docs/data-dictionary${isHca ? "/healthcare-analytics/" : "/"}${createSlug(entityName)}`}>
              {entityName}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default RelatedEntitiesList;
