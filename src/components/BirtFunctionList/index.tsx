import birtFunctions from "@site/src/data/birt-functions.json";
import styles from "@site/src/components/BirtFunctionList/styles.module.css";

function BirtFunctionList() {
  // Convert object to array
  const functionsArray = Object.entries(birtFunctions).map(([key, value]) => ({
    name: key,
    ...value,
  }));

  const renderArguments = (birtFunction) => {
    if (!birtFunction.args) {
      return (
        <>
          <p className="text--bold">Arguments</p>
          <p>None</p>
        </>
      );
    }

    if (!Array.isArray(birtFunction.args)) {
      return (
        <>
          <p className="text--bold">Arguments</p>
          <div className="row row--no-gutters">
            <p className="text--bold col col--3">{birtFunction.args.name}</p>
            <p className="col col--6">{birtFunction.args.description}</p>
            {birtFunction.args.notes && (
              <ul>
                {birtFunction.args.notes.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
            )}
          </div>
        </>
      );
    }

    return (
      <>
        <p className="text--bold">Arguments</p>
        <ul>
          {birtFunction.args.map((arg) => (
            <li key={arg.name} className="row row--no-gutters">
              <p className="text--bold col col--3">{arg.name}</p>
              <p className="col col--6">{arg.description}</p>
              {arg.notes && (
                <ul>
                  {arg.notes.map((note, index) => (
                    <li key={index}>{note}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </>
    );
  };

  const renderReturns = (birtFunction) => {
    if (!birtFunction.returnDesc) {
      return (
        <>
          <p className="text--bold">Returns</p>
          <p>None</p>
        </>
      );
    }

    return (
      <>
        <div className="margin-bottom--xl">
          <p className="text--bold">Returns</p>
          <p>{birtFunction.returnDesc}</p>
          {birtFunction.returnNotes && (
            <ul>
              {birtFunction.returnNotes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          )}
        </div>
      </>
    );
  };

  return (
    <div className="birt-function-list">
      {functionsArray.map((birtFunction) => (
        <section key={birtFunction.name}>
          <h3>{birtFunction.name}</h3>

          <div id={`${birtFunction.name}-container`}>
            <p>{birtFunction.description}</p>

            <p className="text--bold">Syntax</p>
            <code className={styles.code}>
              <pre>{birtFunction.syntax}</pre>
            </code>

            {renderArguments(birtFunction)}
            {renderReturns(birtFunction)}
          </div>
        </section>
      ))}
    </div>
  );
}

export default BirtFunctionList;
