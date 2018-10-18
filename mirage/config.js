export default function() {
  this.namespace = "/api";

  let risicos = [
    {
      type: "risicos",
      id: "0",
      attributes: {
        label: "Geslacht",
        category: "algemeen",
        name: "geslacht",
          value: ["Man", "Vrouw"],
          weight: ["1", "2"]
      }
    },
    {
      type: "risicos",
      id: "1",
      attributes: {
        label: "Leeftijd van het kind",
        category: "algemeen",
        name: "leeftijdKind",
          value: [
            "0-4 jaar",
            "4-8 jaar",
            "8-12 jaar",
            "12-16 jaar",
            "16-18 jaar"
          ],
          weight: ["2", "2", "2", "1", "4"]
      }
    },
    {
      type: "risicos",
      id: "2",
      attributes: {
        label: "leeftijd van de vader bij geboorte",
        category: "algemeen",
        name: "leeftijdVader",
          value: [
            "Jonger dan 20 jaar",
            "20-25 jaar",
            "25-30 jaar",
            "30-35 jaar",
            "35-40 jaar",
            "40 jaar of ouder"
          ],
          weight: ["1", "-1", "-3", "-4", "-5", "-5"]
      }
    },
    {
      type: "risicos",
      id: "3",
      attributes: {
        label: "leeftijd van de moeder bij geboorte",
        category: "algemeen",
        name: "leeftijdMoeder",
          value: [
            "Jonger dan 20 jaar",
            "20-25 jaar",
            "25-30 jaar",
            "30-35 jaar",
            "35-40 jaar",
            "40 jaar of ouder"
          ],
          weight: ["-2", "-1", "-2", "-1", "-1", "-1"]

      }
    },
    {
      type: "risicos",
      id: "4",
      attributes: {
        label: "Leeftijd verschil tussen ouders",
        category: "algemeen",
        name: "leeftijdVerschil",
          value: ["Minder dan 5 jaar", "Meer dan 5 jaar"],
          weight: ["3", "3"]
      }
    },
    {
      type: "risicos",
      id: "5",
      attributes: {
        label: "Herkomst ouders",
        category: "algemeen",
        name: "herkomstOuders",
          value: [
            "Beide ouders Nederlands",
            "Beide ouders niet Nederlands",
            "Een van de ouders niet Nederlands"
          ],
          weight: ["3", "3", "3"]
      }
    },
    {
      type: "risicos",
      id: "6",
      attributes: {
        label: "Hulptraject",
        category: "algemeen",
        name: "hulptraject",
          value: [
            "Geen jeugdhulp zonder verblijf",
            "Jeugdhulp zonder verblijf gehad"
          ],
          weight: ["1", "1"]

      }
    }
  ];

  this.get("/risicos", function(db, request) {
    if (request.queryParams.label !== undefined) {
      let filteredRisicos = risicos.filter(function(i) {
        return (
          i.attributes.label
            .toLowerCase()
            .indexOf(request.queryParams.label.toLowerCase()) !== -1
        );
      });
      return { data: filteredRisicos };
    } else {
      return { data: risicos };
    }
  });
}
