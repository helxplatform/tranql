/*
 * This is a test query returned from the /tranql/query endpoint with parameters:
 *   dynamic_id_resolution=true
 *   asynchronous=true
 * and body:
 *   select disease->phenotypic_feature
 *    from "redis:test"
 *   where disease="diabetes"
 */
module.exports = {
  "message": {
    "knowledge_graph": {
      "nodes": {
        "MONDO:0014523": {
          "category": [
            "biolink:Disease",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "juvenile-onset diabetes mellitus-central and peripheral neurodegeneration syndrome",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "MONDO:0014523",
                "OMIM:616192",
                "ORPHANET:445062",
                "UMLS:C4015436"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "MONDO:0014523"
        },
        "HP:0002066": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Gait ataxia",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0002066",
                "NCIT:C3834",
                "UMLS:C0231691",
                "UMLS:C0427154",
                "UMLS:C0751836",
                "UMLS:C0751837",
                "MEDDRA:10003597",
                "SNOMEDCT:250029005",
                "SNOMEDCT:25136009",
                "SNOMEDCT:69021004",
                "MESH:D020234"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0002066"
        },
        "MONDO:0010802": {
          "category": [
            "biolink:Disease",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "pancreatic hypoplasia-diabetes-congenital heart disease syndrome",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "MONDO:0010802",
                "DOID:0111733",
                "OMIM:600001",
                "ORPHANET:2255",
                "UMLS:C1838780",
                "UMLS:C2931296",
                "UMLS:C3888085",
                "UMLS:C4012454",
                "MESH:C536714",
                "MESH:C564011",
                "SNOMEDCT:722206009"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "MONDO:0010802"
        },
        "HP:0009112": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Aplasia of the left hemidiaphragm",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0009112",
                "UMLS:C4024593"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0009112"
        },
        "MONDO:0030087": {
          "category": [
            "biolink:Disease",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "diabetes mellitus, permanent neonatal 2",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "MONDO:0030087",
                "OMIM:618856"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "MONDO:0030087"
        },
        "HP:0007334": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Bilateral tonic-clonic seizure with focal onset",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0007334",
                "UMLS:C0877017",
                "MEDDRA:10048674",
                "MEDDRA:10056209"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0007334"
        },
        "MONDO:0030088": {
          "category": [
            "biolink:Disease",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "diabetes mellitus, permanent neonatal 3",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "MONDO:0030088",
                "OMIM:618857"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "MONDO:0030088"
        },
        "HP:0002919": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Ketonuria",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0002919",
                "NCIT:C122512",
                "UMLS:C0162275",
                "MEDDRA:10000419",
                "MEDDRA:10023388",
                "SNOMEDCT:274783007",
                "SNOMEDCT:36815008"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0002919"
        },
        "MONDO:0012436": {
          "category": [
            "biolink:Disease",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "neonatal diabetes mellitus with congenital hypothyroidism",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "MONDO:0012436",
                "DOID:0060638",
                "OMIM:610199",
                "ORPHANET:79118",
                "UMLS:C1857775",
                "MESH:C565705"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "MONDO:0012436"
        },
        "HP:0005280": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Depressed nasal bridge",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0005280",
                "UMLS:C1836542",
                "UMLS:C3550546",
                "UMLS:C4280495"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0005280"
        },
        "HP:0011629": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Total absence of the pericardium",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0011629",
                "UMLS:C0345140",
                "SNOMEDCT:253732001"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0011629"
        },
        "HP:0001660": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Truncus arteriosus",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0001660",
                "UMLS:C0041206",
                "UMLS:C4020867",
                "SNOMEDCT:58140002",
                "MESH:D014338"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0001660"
        },
        "MONDO:0031481": {
          "category": [
            "biolink:Disease",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "microcephaly, epilepsy, and diabetes syndrome 1",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "MONDO:0031481",
                "OMIM:614231",
                "ORPHANET:306558",
                "UMLS:C3280240"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "MONDO:0031481"
        },
        "HP:0003241": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "External genital hypoplasia",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0003241",
                "UMLS:C1855333"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0003241"
        },
        "MONDO:0022993": {
          "category": [
            "biolink:Disease",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "dipsogenic diabetes insipidus",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "MONDO:0022993",
                "UMLS:C0268813",
                "MESH:C548013",
                "NCIT:C129735",
                "SNOMEDCT:82800008"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "MONDO:0022993"
        },
        "HP:0001959": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Polydipsia",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0001959",
                "NCIT:C50700",
                "UMLS:C0085602",
                "MEDDRA:10015608",
                "MEDDRA:10036067",
                "MEDDRA:10036070",
                "MEDDRA:10043459",
                "MEDDRA:10072057",
                "SNOMEDCT:17173007",
                "SNOMEDCT:267026004",
                "MESH:D059606"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0001959"
        },
        "MONDO:0010581": {
          "category": [
            "biolink:Disease",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "diabetes insipidus, nephrogenic, X-linked",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "MONDO:0010581",
                "OMIM:304800",
                "UMLS:C1563705"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "MONDO:0010581"
        },
        "MONDO:0015790": {
          "category": [
            "biolink:Disease",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "central diabetes insipidus",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "MONDO:0015790",
                "OMIM:304900",
                "ORPHANET:178029",
                "UMLS:C0687720",
                "MESH:D020790",
                "MEDDRA:10049518",
                "MEDDRA:10068587",
                "MEDDRA:10073192",
                "MEDDRA:10078568",
                "HP:0000863"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "MONDO:0015790"
        },
        "MONDO:0007451": {
          "category": [
            "biolink:Disease",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "diabetes insipidus, nephrogenic, autosomal",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "MONDO:0007451",
                "OMIM:125800",
                "UMLS:C1563706"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "MONDO:0007451"
        },
        "HP:0032794": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Myoclonic seizure",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0032794"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0032794"
        },
        "HP:0001537": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Umbilical hernia",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0001537",
                "NCIT:C118375",
                "UMLS:C0019322",
                "UMLS:C1306503",
                "MEDDRA:10010658",
                "MEDDRA:10015677",
                "MEDDRA:10045458",
                "MEDDRA:10045459",
                "MEDDRA:10045461",
                "SNOMEDCT:396347007",
                "SNOMEDCT:49324006",
                "SNOMEDCT:5867007"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0001537"
        },
        "HP:0000286": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Epicanthus",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0000286",
                "UMLS:C0678230"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0000286"
        },
        "HP:0012434": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Delayed social development",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0012434",
                "UMLS:C4022906"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0012434"
        },
        "MONDO:0030089": {
          "category": [
            "biolink:Disease",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "diabetes mellitus, permanent neonatal 4",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "MONDO:0030089",
                "OMIM:618858"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "MONDO:0030089"
        },
        "HP:0040217": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Elevated hemoglobin A1c",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0040217",
                "UMLS:C4073162"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0040217"
        },
        "MONDO:0100165": {
          "category": [
            "biolink:Disease",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "permanent neonatal diabetes mellitus 1",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "MONDO:0100165",
                "OMIM:606176",
                "UMLS:C1833102",
                "MESH:C563424"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "MONDO:0100165"
        },
        "MONDO:0012522": {
          "category": [
            "biolink:Disease",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "diabetes mellitus, transient neonatal, 3",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "MONDO:0012522",
                "OMIM:610582",
                "UMLS:C1864623",
                "MESH:C566432",
                "SNOMEDCT:609581006"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "MONDO:0012522"
        },
        "HP:0011968": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Feeding difficulties",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0011968",
                "NCIT:C50560",
                "UMLS:C0232466",
                "SNOMEDCT:78164000"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0011968"
        },
        "MONDO:0010785": {
          "category": [
            "biolink:Disease",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "maternally-inherited diabetes and deafness",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "MONDO:0010785",
                "OMIM:520000",
                "ORPHANET:225",
                "UMLS:C0342289",
                "UMLS:C4330695",
                "MESH:C536246",
                "NCIT:C130996",
                "NCIT:C131859",
                "SNOMEDCT:237619009"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "MONDO:0010785"
        },
        "HP:0001260": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Dysarthria",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0001260",
                "NCIT:C79549",
                "UMLS:C0013362",
                "UMLS:C0240952",
                "UMLS:C0454597",
                "UMLS:C0454598",
                "UMLS:C1563666",
                "MEDDRA:10013887",
                "SNOMEDCT:229685007",
                "SNOMEDCT:229686008",
                "SNOMEDCT:8011004",
                "MESH:D004401"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0001260"
        },
        "MONDO:0007450": {
          "category": [
            "biolink:Disease",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "neurohypophyseal diabetes insipidus",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "MONDO:0007450",
                "DOID:12388",
                "OMIM:125700",
                "ORPHANET:30925",
                "NCIT:C84933",
                "SNOMEDCT:267393007",
                "SNOMEDCT:45369008"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "MONDO:0007450"
        },
        "HP:0003196": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Short nose",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0003196",
                "UMLS:C0426414",
                "UMLS:C1854114",
                "SNOMEDCT:249310005"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0003196"
        },
        "HP:0000218": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "High palate",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0000218",
                "UMLS:C0240635",
                "MEDDRA:10020046",
                "SNOMEDCT:27272007"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0000218"
        },
        "MONDO:0008242": {
          "category": [
            "biolink:Disease",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "photomyoclonus, diabetes mellitus, deafness, nephropathy, and cerebral dysfunction",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "MONDO:0008242",
                "OMIM:172500",
                "UMLS:C1809475",
                "MESH:C538113",
                "SNOMEDCT:237612000"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "MONDO:0008242"
        },
        "HP:0007164": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Slowed slurred speech",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0007164",
                "UMLS:C4024929"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0007164"
        },
        "HP:0001289": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Confusion",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0001289",
                "NCIT:C37928",
                "UMLS:C0009676",
                "UMLS:C0152124",
                "UMLS:C0233407",
                "UMLS:C0683369",
                "UMLS:C0751053",
                "UMLS:C0813178",
                "UMLS:C1306037",
                "MEDDRA:10004541",
                "MEDDRA:10010298",
                "MEDDRA:10010300",
                "MEDDRA:10010301",
                "MEDDRA:10010304",
                "MEDDRA:10010305",
                "MEDDRA:10010767",
                "MEDDRA:10013394",
                "MEDDRA:10013395",
                "MEDDRA:10027350",
                "MEDDRA:10031087",
                "MEDDRA:10037997",
                "MEDDRA:10050462",
                "MEDDRA:10072536",
                "SNOMEDCT:191678001",
                "SNOMEDCT:280943007",
                "SNOMEDCT:286933003",
                "SNOMEDCT:40917007",
                "SNOMEDCT:44031002",
                "SNOMEDCT:62476001",
                "MESH:D003221"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0001289"
        },
        "MONDO:0007669": {
          "category": [
            "biolink:Disease",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "renal cysts and diabetes syndrome",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "MONDO:0007669",
                "DOID:0111101",
                "OMIM:137920",
                "ORPHANET:93111",
                "UMLS:C0431693",
                "UMLS:C2959918",
                "UMLS:CN206512",
                "MESH:C535520",
                "NCIT:C123018",
                "SNOMEDCT:253864004",
                "SNOMEDCT:446641003",
                "SNOMEDCT:609572000"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "MONDO:0007669"
        },
        "HP:0002120": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Cerebral cortical atrophy",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0002120",
                "UMLS:C4551583"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0002120"
        },
        "MONDO:0012192": {
          "category": [
            "biolink:Disease",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "permanent neonatal diabetes mellitus-pancreatic and cerebellar agenesis syndrome",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "MONDO:0012192",
                "OMIM:609069",
                "ORPHANET:65288",
                "UMLS:C1836780",
                "MESH:C563796"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "MONDO:0012192"
        },
        "HP:0000377": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Abnormality of the pinna",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0000377",
                "UMLS:C0431483",
                "UMLS:C0857379",
                "MEDDRA:10025534",
                "SNOMEDCT:253255002"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0000377"
        },
        "HP:0012207": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Reduced sperm motility",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0012207",
                "UMLS:C0403823",
                "UMLS:C4023002",
                "MEDDRA:10067162",
                "MEDDRA:10067166",
                "MESH:D053627"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0012207"
        },
        "HP:0001488": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Bilateral ptosis",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0001488",
                "UMLS:C1865916"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0001488"
        },
        "HP:0000252": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Microcephaly",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0000252",
                "UMLS:C4551563"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0000252"
        },
        "HP:0000325": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Triangular face",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0000325",
                "UMLS:C1835884"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0000325"
        },
        "HP:0030795": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Reduced C-peptide level",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0030795",
                "UMLS:C4280764"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0030795"
        },
        "HP:0002756": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Pathologic fracture",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0002756",
                "NCIT:C3047",
                "UMLS:C0016663",
                "MEDDRA:10005965",
                "MEDDRA:10017272",
                "MEDDRA:10034141",
                "MEDDRA:10034156",
                "MEDDRA:10041728",
                "MEDDRA:10041731",
                "SNOMEDCT:22640007",
                "SNOMEDCT:268029009",
                "MESH:D005598"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0002756"
        },
        "MONDO:0012348": {
          "category": [
            "biolink:Disease",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "maturity-onset diabetes of the young type 8",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "MONDO:0012348",
                "DOID:0111105",
                "OMIM:609812",
                "UMLS:C1853297",
                "MESH:C565225",
                "SNOMEDCT:609575003"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "MONDO:0012348"
        },
        "HP:0002027": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Abdominal pain",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0002027",
                "NCIT:C26682",
                "NCIT:C78320",
                "NCIT:C78630",
                "UMLS:C0000737",
                "UMLS:C0221512",
                "UMLS:C0232487",
                "UMLS:C0235309",
                "UMLS:C0687713",
                "UMLS:C3888418",
                "MEDDRA:10000059",
                "MEDDRA:10000081",
                "MEDDRA:10000085",
                "MEDDRA:10000429",
                "MEDDRA:10004226",
                "MEDDRA:10013084",
                "MEDDRA:10017814",
                "MEDDRA:10017999",
                "MEDDRA:10018000",
                "MEDDRA:10018241",
                "MEDDRA:10018796",
                "MEDDRA:10033374",
                "MEDDRA:10033402",
                "MEDDRA:10033492",
                "MEDDRA:10042076",
                "MEDDRA:10042101",
                "MEDDRA:10042112",
                "MEDDRA:10042124",
                "MEDDRA:10042126",
                "MEDDRA:10045148",
                "MEDDRA:10046318",
                "MEDDRA:10064906",
                "SNOMEDCT:162059005",
                "SNOMEDCT:21522001",
                "SNOMEDCT:271681002",
                "SNOMEDCT:43364001",
                "SNOMEDCT:73063007",
                "MESH:D015746"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0002027"
        },
        "HP:0003259": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Elevated serum creatinine",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0003259",
                "UMLS:C0700225",
                "MEDDRA:10011375",
                "MEDDRA:10021678",
                "MEDDRA:10037825",
                "MEDDRA:10040233",
                "SNOMEDCT:166717003"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0003259"
        },
        "HP:0000316": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Hypertelorism",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0000316",
                "NCIT:C34715",
                "UMLS:C0020534",
                "MEDDRA:10020771",
                "MEDDRA:10057862",
                "SNOMEDCT:194021007",
                "SNOMEDCT:22006008",
                "MESH:D006972"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0000316"
        },
        "HP:0000343": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Long philtrum",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0000343",
                "UMLS:C1865014"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0000343"
        },
        "HP:0003698": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Difficulty standing",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0003698",
                "UMLS:C0241237",
                "MEDDRA:10050218",
                "MEDDRA:10050256",
                "SNOMEDCT:249902000"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0003698"
        },
        "HP:0000021": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Megacystis",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0000021",
                "UMLS:C1855311"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0000021"
        },
        "HP:0002104": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Apnea",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0002104",
                "NCIT:C26698",
                "UMLS:C0003578",
                "MEDDRA:10002972",
                "MEDDRA:10002974",
                "SNOMEDCT:1023001",
                "SNOMEDCT:248583008",
                "MESH:D001049"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0002104"
        },
        "HP:0030423": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Splenic cyst",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0030423",
                "UMLS:C0272407",
                "MEDDRA:10051169",
                "SNOMEDCT:79040006"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0030423"
        },
        "HP:0002910": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Elevated hepatic transaminase",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0002910",
                "NCIT:C113751",
                "NCIT:C122516",
                "UMLS:C0151766",
                "UMLS:C0235996",
                "UMLS:C0438237",
                "UMLS:C0438717",
                "UMLS:C0877359",
                "UMLS:C1842003",
                "UMLS:C1848701",
                "UMLS:C2242708",
                "MEDDRA:10000156",
                "MEDDRA:10000158",
                "MEDDRA:10013505",
                "MEDDRA:10014481",
                "MEDDRA:10019662",
                "MEDDRA:10024409",
                "MEDDRA:10024677",
                "MEDDRA:10024690",
                "MEDDRA:10024692",
                "MEDDRA:10024693",
                "MEDDRA:10024696",
                "MEDDRA:10029701",
                "MEDDRA:10037822",
                "MEDDRA:10037823",
                "MEDDRA:10044346",
                "MEDDRA:10044347",
                "MEDDRA:10048556",
                "MEDDRA:10048557",
                "MEDDRA:10054889",
                "MEDDRA:10054969",
                "MEDDRA:10060795",
                "MEDDRA:10062685",
                "MEDDRA:10068237",
                "MEDDRA:10068238",
                "MEDDRA:10077692",
                "SNOMEDCT:166603001",
                "SNOMEDCT:166643006"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0002910"
        },
        "MONDO:0011073": {
          "category": [
            "biolink:Disease",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "diabetes mellitus, transient neonatal, 1",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "MONDO:0011073",
                "OMIM:601410",
                "UMLS:C1832386",
                "MESH:C563322",
                "NCIT:C131846",
                "SNOMEDCT:609579009"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "MONDO:0011073"
        },
        "HP:0001525": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Severe failure to thrive",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0001525",
                "UMLS:C1855514"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0001525"
        },
        "HP:0001290": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Generalized hypotonia",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0001290",
                "UMLS:C1858120"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0001290"
        },
        "HP:0000737": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Irritability",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0000737",
                "UMLS:C2700617"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0000737"
        },
        "HP:0100611": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Multiple glomerular cysts",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0100611",
                "NCIT:C123015",
                "UMLS:C4020705",
                "UMLS:C4022013"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0100611"
        },
        "HP:0003228": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Hypernatremia",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0003228",
                "UMLS:C0020488",
                "MEDDRA:10020679",
                "MEDDRA:10020680",
                "MEDDRA:10028672",
                "MEDDRA:10041277",
                "SNOMEDCT:286926003",
                "SNOMEDCT:39355002",
                "SNOMEDCT:771115008",
                "MESH:D006955"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0003228"
        },
        "HP:0002317": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Unsteady gait",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0002317",
                "NCIT:C122478",
                "UMLS:C0231686",
                "UMLS:C0231689",
                "UMLS:C0231693",
                "UMLS:C0231694",
                "UMLS:C0231695",
                "UMLS:C0231696",
                "UMLS:C0234996",
                "UMLS:C0235000",
                "UMLS:C0337210",
                "UMLS:C0427128",
                "UMLS:C0427169",
                "UMLS:C0427177",
                "UMLS:C0751829",
                "UMLS:C0751830",
                "UMLS:C0751831",
                "UMLS:C0751832",
                "MEDDRA:10016474",
                "MEDDRA:10017575",
                "MEDDRA:10017579",
                "MEDDRA:10017580",
                "MEDDRA:10017582",
                "MEDDRA:10017583",
                "MEDDRA:10017587",
                "MEDDRA:10017588",
                "MEDDRA:10017589",
                "MEDDRA:10019474",
                "MEDDRA:10022455",
                "MEDDRA:10033840",
                "MEDDRA:10046261",
                "MEDDRA:10082328",
                "SNOMEDCT:22631008",
                "SNOMEDCT:250002000",
                "SNOMEDCT:250049001",
                "SNOMEDCT:250054005",
                "SNOMEDCT:250991000119100",
                "SNOMEDCT:271707009",
                "SNOMEDCT:365884000",
                "SNOMEDCT:394616008",
                "SNOMEDCT:397776000",
                "SNOMEDCT:398218008",
                "SNOMEDCT:52751000",
                "SNOMEDCT:55791005",
                "SNOMEDCT:62334008",
                "MESH:D020233"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0002317"
        },
        "HP:0001324": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Muscle weakness",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0001324",
                "NCIT:C50658",
                "UMLS:C0151786",
                "MEDDRA:10028350",
                "MEDDRA:10028351",
                "MEDDRA:10028372",
                "MEDDRA:10047867",
                "SNOMEDCT:26544005",
                "MESH:D018908"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0001324"
        },
        "HP:0010804": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Tented upper lip vermilion",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0010804",
                "UMLS:C1839767",
                "UMLS:C1850072",
                "UMLS:C1853383"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0010804"
        },
        "HP:0011682": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Perimembranous ventricular septal defect",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0011682",
                "NCIT:C124556",
                "UMLS:C0344925",
                "SNOMEDCT:109428005"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0011682"
        },
        "HP:0002205": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Recurrent respiratory infections",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0002205",
                "UMLS:C3806482"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0002205"
        },
        "HP:0001737": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Pancreatic cysts",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0001737",
                "NCIT:C3304",
                "UMLS:C0030283",
                "UMLS:C1860394",
                "MEDDRA:10033580",
                "MEDDRA:10033615",
                "SNOMEDCT:31258000",
                "MESH:D010181"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0001737"
        },
        "HP:0001939": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Abnormality of metabolism/homeostasis",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0001939",
                "UMLS:C4021768"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0001939"
        },
        "HP:0001263": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Global developmental delay",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0001263",
                "UMLS:C0557874",
                "UMLS:C1864897",
                "UMLS:C4020875",
                "SNOMEDCT:224958001"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0001263"
        },
        "HP:0002013": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Vomiting",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0002013",
                "NCIT:C3442",
                "UMLS:C0042963",
                "MEDDRA:10014542",
                "MEDDRA:10047699",
                "MEDDRA:10047700",
                "MEDDRA:10047706",
                "SNOMEDCT:249497008",
                "SNOMEDCT:300359004",
                "SNOMEDCT:422400008",
                "MESH:D014839"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0002013"
        },
        "HP:0001955": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Unexplained fevers",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0001955",
                "UMLS:C1844662"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0001955"
        },
        "HP:0000666": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Horizontal nystagmus",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0000666",
                "UMLS:C0271385",
                "SNOMEDCT:81756001"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0000666"
        },
        "MONDO:0008843": {
          "category": [
            "biolink:Disease",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "atherosclerosis-deafness-diabetes-epilepsy-nephropathy syndrome",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "MONDO:0008843",
                "OMIM:209010",
                "ORPHANET:1192",
                "UMLS:C1859596",
                "UMLS:C2931125",
                "MESH:C536178",
                "MESH:C565928",
                "SNOMEDCT:720519003"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "MONDO:0008843"
        },
        "HP:0001317": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Abnormal cerebellum morphology",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0001317",
                "UMLS:C0742038",
                "UMLS:C1866129"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0001317"
        },
        "HP:0010557": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Overlapping fingers",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0010557",
                "UMLS:C1446712"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0010557"
        },
        "HP:0001744": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Splenomegaly",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0001744",
                "NCIT:C3384",
                "UMLS:C0038002",
                "MEDDRA:10041637",
                "MEDDRA:10041660",
                "SNOMEDCT:16294009",
                "MESH:D013163"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0001744"
        },
        "HP:0001284": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Areflexia",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0001284",
                "NCIT:C115420",
                "UMLS:C0234146",
                "UMLS:C0241772",
                "UMLS:C0278124",
                "MEDDRA:10000338",
                "MEDDRA:10000339",
                "MEDDRA:10003084",
                "MEDDRA:10038241",
                "MEDDRA:10038256",
                "MEDDRA:10067218",
                "SNOMEDCT:349006",
                "SNOMEDCT:37280007"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0001284"
        },
        "HP:0001387": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Joint stiffness",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0001387",
                "NCIT:C79603",
                "UMLS:C0162298",
                "MEDDRA:10023230",
                "MEDDRA:10042041",
                "MEDDRA:10042047",
                "MEDDRA:10059879",
                "SNOMEDCT:84445001"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0001387"
        },
        "HP:0007366": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Atrophy/Degeneration affecting the brainstem",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0007366",
                "UMLS:C4024900"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0007366"
        },
        "MONDO:0005147": {
          "category": [
            "biolink:Disease",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "type 1 diabetes mellitus",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "MONDO:0005147",
                "DOID:9744",
                "EFO:0001359",
                "UMLS:C0011854",
                "UMLS:C0205734",
                "UMLS:C0342302",
                "UMLS:C3837958",
                "MESH:D003922",
                "MEDDRA:10006372",
                "MEDDRA:10012595",
                "MEDDRA:10012608",
                "MEDDRA:10012609",
                "MEDDRA:10021211",
                "MEDDRA:10022482",
                "MEDDRA:10022497",
                "MEDDRA:10023253",
                "MEDDRA:10023392",
                "MEDDRA:10045228",
                "MEDDRA:10067584",
                "NCIT:C2986",
                "SNOMEDCT:11530004",
                "SNOMEDCT:46635009",
                "KEGG.DISEASE:04940",
                "HP:0100651"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "MONDO:0005147"
        },
        "HP:0006476": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Abnormality of the pancreatic islet cells",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0006476",
                "UMLS:C4025043"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0006476"
        },
        "HP:0004415": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Pulmonary artery stenosis",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0004415",
                "NCIT:C99030",
                "UMLS:C0238397",
                "MEDDRA:10037338",
                "SNOMEDCT:95441000",
                "MESH:D000071079"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0004415"
        },
        "HP:0002714": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Downturned corners of mouth",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0002714",
                "UMLS:C1866195"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0002714"
        },
        "HP:0012642": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Cerebellar agenesis",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0012642",
                "UMLS:C4022808"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0012642"
        },
        "HP:0002594": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Pancreatic hypoplasia",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0002594",
                "UMLS:C0266267",
                "SNOMEDCT:68591005"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0002594"
        },
        "HP:0000341": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Narrow forehead",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0000341",
                "UMLS:C1839758"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0000341"
        },
        "HP:0000445": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Wide nose",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0000445",
                "UMLS:C0426421",
                "SNOMEDCT:249321001"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0000445"
        },
        "HP:0000078": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Abnormality of the genital system",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0000078",
                "UMLS:C0281966",
                "UMLS:C0744356"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0000078"
        },
        "MONDO:0005148": {
          "category": [
            "biolink:Disease",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "type 2 diabetes mellitus",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "MONDO:0005148",
                "DOID:9352",
                "OMIM:125853",
                "OMIM:147545",
                "OMIM:168820",
                "EFO:0001360",
                "UMLS:C0011860",
                "UMLS:C1840169",
                "UMLS:C1852091",
                "UMLS:C2674662",
                "UMLS:C2674663",
                "UMLS:C2674665",
                "UMLS:C3149706",
                "UMLS:C4017238",
                "UMLS:CN244395",
                "MESH:D003924",
                "MEDDRA:10012611",
                "MEDDRA:10012613",
                "MEDDRA:10026947",
                "MEDDRA:10029402",
                "MEDDRA:10029505",
                "MEDDRA:10045242",
                "MEDDRA:10067585",
                "NCIT:C26747",
                "SNOMEDCT:44054006",
                "ICD10:E11",
                "KEGG.DISEASE:04930",
                "HP:0005978"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "MONDO:0005148"
        },
        "HP:0000855": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Insulin resistance",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0000855",
                "NCIT:C113101",
                "UMLS:C0021655",
                "UMLS:C0920563",
                "MEDDRA:10022489",
                "SNOMEDCT:48606007",
                "SNOMEDCT:763325000",
                "MESH:D007333"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0000855"
        },
        "HP:0002079": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Hypoplasia of the corpus callosum",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0002079",
                "UMLS:C0344482",
                "SNOMEDCT:204043002"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0002079"
        },
        "MONDO:0010813": {
          "category": [
            "biolink:Disease",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "pancreatic beta cell agenesis with neonatal diabetes mellitus",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "MONDO:0010813",
                "OMIM:600089",
                "ORPHANET:28455",
                "UMLS:C1838655",
                "MESH:C538111"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "MONDO:0010813"
        },
        "HP:0001438": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Abnormal abdomen morphology",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0001438",
                "UMLS:C4020869"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0001438"
        },
        "HP:0000768": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Pectus carinatum",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0000768",
                "UMLS:C0158731",
                "UMLS:C3850012",
                "UMLS:C3852958",
                "MEDDRA:10008504",
                "MEDDRA:10023325",
                "MEDDRA:10023326",
                "MEDDRA:10034203",
                "MEDDRA:10034205",
                "MEDDRA:10035010",
                "MEDDRA:10035011",
                "SNOMEDCT:205101001",
                "MESH:D066166"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0000768"
        },
        "HP:0004322": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Short stature",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0004322",
                "UMLS:C0349588",
                "MEDDRA:10040600",
                "MEDDRA:10041194",
                "MEDDRA:10041960"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0004322"
        },
        "MONDO:0014458": {
          "category": [
            "biolink:Disease",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Fanconi renotubular syndrome 4 with maturity-onset diabetes of the young",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "MONDO:0014458",
                "DOID:0080760",
                "OMIM:616026",
                "UMLS:C4014962"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "MONDO:0014458"
        },
        "HP:0001270": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Motor delay",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0001270",
                "NCIT:C116943",
                "UMLS:C1854301",
                "UMLS:C4020874",
                "MEDDRA:10070302"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0001270"
        },
        "HP:0002187": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Intellectual disability, profound",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0002187",
                "UMLS:C0020796",
                "UMLS:C3161330",
                "MEDDRA:10021218",
                "MEDDRA:10036791",
                "SNOMEDCT:31216003"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0002187"
        },
        "HP:0000023": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Inguinal hernia",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0000023",
                "NCIT:C34690",
                "NCIT:C34691",
                "NCIT:C34692",
                "UMLS:C0019294",
                "UMLS:C0019295",
                "UMLS:C0019296",
                "MEDDRA:10013046",
                "MEDDRA:10019917",
                "MEDDRA:10021715",
                "MEDDRA:10022016",
                "MEDDRA:10022017",
                "MEDDRA:10022019",
                "MEDDRA:10029887",
                "MEDDRA:10082132",
                "SNOMEDCT:155738001",
                "SNOMEDCT:196800008",
                "SNOMEDCT:396232000",
                "SNOMEDCT:65626001",
                "SNOMEDCT:73147001",
                "MESH:D006552"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0000023"
        },
        "HP:0000751": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Personality changes",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0000751",
                "NCIT:C78548",
                "UMLS:C0240735",
                "MEDDRA:10034719",
                "SNOMEDCT:102943000",
                "SNOMEDCT:192073007"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0000751"
        },
        "HP:0012594": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Moderate albuminuria",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0012594",
                "UMLS:C0730345",
                "UMLS:C1654921",
                "MEDDRA:10027525",
                "MEDDRA:10076047",
                "SNOMEDCT:312975006"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0012594"
        },
        "HP:0001133": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Constriction of peripheral visual field",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0001133",
                "UMLS:C0235095",
                "MEDDRA:10047554",
                "SNOMEDCT:1151008",
                "SNOMEDCT:267628004"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0001133"
        },
        "HP:0031819": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Increased waist to hip ratio",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0031819",
                "UMLS:C4703554"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0031819"
        },
        "HP:0012448": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Delayed myelination",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0012448",
                "UMLS:C1277241",
                "MEDDRA:10076456",
                "SNOMEDCT:135810007"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0012448"
        },
        "HP:0003076": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Glycosuria",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0003076",
                "UMLS:C0017979",
                "MEDDRA:10018473",
                "MEDDRA:10018478",
                "MEDDRA:10042453",
                "MEDDRA:10042455",
                "MEDDRA:10042456",
                "MEDDRA:10046678",
                "MEDDRA:10068405",
                "SNOMEDCT:45154002",
                "MESH:D006029"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0003076"
        },
        "HP:0001993": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Ketoacidosis",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0001993",
                "UMLS:C0220982",
                "MEDDRA:10023379",
                "SNOMEDCT:56051008"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0001993"
        },
        "HP:0007201": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Cerebral artery atherosclerosis",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0007201",
                "UMLS:C4024924"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0007201"
        },
        "HP:0001520": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Large for gestational age",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0001520",
                "NCIT:C87092",
                "UMLS:C1848395",
                "MEDDRA:10023789",
                "MEDDRA:10023790"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0001520"
        },
        "MONDO:0013242": {
          "category": [
            "biolink:Disease",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "maturity-onset diabetes of the young type 11",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "MONDO:0013242",
                "DOID:0111109",
                "OMIM:613375",
                "UMLS:C3150618",
                "SNOMEDCT:609578001"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "MONDO:0013242"
        },
        "HP:0025502": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Overweight",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0025502",
                "NCIT:C94250",
                "UMLS:C0497406",
                "MEDDRA:10033307",
                "SNOMEDCT:238131007",
                "MESH:D050177"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0025502"
        },
        "HP:0100543": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Cognitive impairment",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0100543",
                "NCIT:C116921",
                "NCIT:C27101",
                "NCIT:C46083",
                "UMLS:C0338656",
                "UMLS:C0683322",
                "MEDDRA:10009845",
                "MEDDRA:10009846",
                "MEDDRA:10048599",
                "SNOMEDCT:386806002"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0100543"
        },
        "HP:0003758": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Reduced subcutaneous adipose tissue",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0003758",
                "UMLS:C0424631",
                "UMLS:C1857657",
                "SNOMEDCT:248316006"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0003758"
        },
        "HP:0001319": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Neonatal hypotonia",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0001319",
                "NCIT:C116708",
                "UMLS:C0270971",
                "UMLS:C2267233",
                "MEDDRA:10021119",
                "MEDDRA:10051004",
                "MEDDRA:10053153",
                "SNOMEDCT:205294008",
                "SNOMEDCT:33010005"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0001319"
        },
        "HP:0009879": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Simplified gyral pattern",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0009879",
                "UMLS:C2749675"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0009879"
        },
        "HP:0000260": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Wide anterior fontanel",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0000260",
                "UMLS:C1866134"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0000260"
        },
        "HP:0002059": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Cerebral atrophy",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0002059",
                "UMLS:C0235946",
                "UMLS:C4020860",
                "MEDDRA:10008096",
                "SNOMEDCT:278849000"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0002059"
        },
        "HP:0000369": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Low-set ears",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0000369",
                "UMLS:C0239234",
                "MEDDRA:10024929",
                "SNOMEDCT:95515009"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0000369"
        },
        "HP:0000952": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Jaundice",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0000952",
                "NCIT:C3143",
                "NCIT:C35299",
                "UMLS:C0022346",
                "UMLS:C0242183",
                "MEDDRA:10021207",
                "MEDDRA:10023126",
                "MEDDRA:10023132",
                "MEDDRA:10023135",
                "MEDDRA:10023139",
                "SNOMEDCT:18165001",
                "SNOMEDCT:60217008",
                "MESH:D007565"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0000952"
        },
        "HP:0002944": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Thoracolumbar scoliosis",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0002944",
                "UMLS:C0749379"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0002944"
        },
        "HP:0000580": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Pigmentary retinopathy",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0000580",
                "UMLS:C1328514",
                "UMLS:C1833999",
                "UMLS:C4551715",
                "MEDDRA:10054856",
                "MEDDRA:10062964"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0000580"
        },
        "HP:0000077": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Abnormality of the kidney",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0000077",
                "UMLS:C0266292",
                "MEDDRA:10010606",
                "SNOMEDCT:44513007"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0000077"
        },
        "HP:0008872": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Feeding difficulties in infancy",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0008872",
                "UMLS:C2674608"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0008872"
        },
        "HP:0001751": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Vestibular dysfunction",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0001751",
                "UMLS:C1843865"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0001751"
        },
        "HP:0002305": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Athetosis",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0002305",
                "NCIT:C116574",
                "UMLS:C0004158",
                "UMLS:C1845265",
                "MEDDRA:10003620",
                "SNOMEDCT:44913001",
                "SNOMEDCT:58593005",
                "MESH:D001264"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0002305"
        },
        "HP:0003537": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Hypouricemia",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0003537",
                "UMLS:C0221333",
                "MEDDRA:10021131",
                "MEDDRA:10054432",
                "SNOMEDCT:4519003"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0003537"
        },
        "HP:0011573": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Hypoplastic tricuspid valve",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0011573",
                "UMLS:C0265837",
                "UMLS:C4023294",
                "SNOMEDCT:43176009"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0011573"
        },
        "HP:0000073": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Ureteral duplication",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0000073",
                "NCIT:C98917",
                "UMLS:C0221365",
                "MEDDRA:10013613",
                "MEDDRA:10013871",
                "MEDDRA:10046380",
                "SNOMEDCT:49496001"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0000073"
        },
        "HP:0004442": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Sagittal craniosynostosis",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0004442",
                "UMLS:C0432123",
                "SNOMEDCT:109418001"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0004442"
        },
        "HP:0008936": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Muscular hypotonia of the trunk",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0008936",
                "UMLS:C1853743"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0008936"
        },
        "HP:0012092": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Abnormality of exocrine pancreas physiology",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0012092",
                "UMLS:C4021103"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0012092"
        },
        "HP:0011182": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Interictal epileptiform activity",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0011182",
                "UMLS:C4023491"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0011182"
        },
        "HP:0001948": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Alkalosis",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0001948",
                "NCIT:C37909",
                "UMLS:C0002063",
                "MEDDRA:10001680",
                "MEDDRA:10001687",
                "SNOMEDCT:21420006",
                "MESH:D000471"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0001948"
        },
        "HP:0000857": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Neonatal insulin-dependent diabetes mellitus",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0000857",
                "UMLS:C3278636"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0000857"
        },
        "HP:0001395": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Hepatic fibrosis",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0001395",
                "UMLS:C0239946",
                "MEDDRA:10016648",
                "MEDDRA:10019668",
                "SNOMEDCT:62484002"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0001395"
        },
        "HP:0002069": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Bilateral tonic-clonic seizure",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0002069",
                "NCIT:C50574",
                "UMLS:C0494475",
                "MEDDRA:10018100",
                "MEDDRA:10018101",
                "MEDDRA:10018661",
                "MEDDRA:10018662",
                "MEDDRA:10018663",
                "MEDDRA:10039909",
                "MEDDRA:10044000",
                "MEDDRA:10062448",
                "SNOMEDCT:54200006"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0002069"
        },
        "HP:0000219": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Thin upper lip vermilion",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0000219",
                "UMLS:C1865017"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0000219"
        },
        "HP:0002521": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Hypsarrhythmia",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0002521",
                "UMLS:C0684276",
                "MEDDRA:10049264"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0002521"
        },
        "HP:0000408": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Progressive sensorineural hearing impairment",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0000408",
                "UMLS:C1843156"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0000408"
        },
        "HP:0002149": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Hyperuricemia",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0002149",
                "NCIT:C3961",
                "UMLS:C0740394",
                "MEDDRA:10020903",
                "MEDDRA:10020904",
                "MEDDRA:10020907",
                "MEDDRA:10046507",
                "SNOMEDCT:271198001",
                "SNOMEDCT:35885006",
                "MESH:D033461"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0002149"
        },
        "HP:0002240": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Hepatomegaly",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0002240",
                "NCIT:C3100",
                "UMLS:C0019209",
                "MEDDRA:10019842",
                "MEDDRA:10024676",
                "SNOMEDCT:80515008",
                "MESH:D006529"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0002240"
        },
        "HP:0001508": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Failure to thrive",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0001508",
                "NCIT:C111659",
                "NCIT:C113099",
                "UMLS:C0231246",
                "UMLS:C2315100",
                "UMLS:C4531021",
                "MEDDRA:10036164",
                "MEDDRA:10047897",
                "SNOMEDCT:36440009",
                "SNOMEDCT:432788009"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0001508"
        },
        "HP:0001265": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Hyporeflexia",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0001265",
                "UMLS:C0700078",
                "MEDDRA:10043245",
                "SNOMEDCT:405946002"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0001265"
        },
        "HP:0001348": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Brisk reflexes",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0001348",
                "UMLS:C2673700"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0001348"
        },
        "HP:0001327": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Photosensitive myoclonic seizure",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0001327",
                "UMLS:C4025791"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0001327"
        },
        "HP:0001986": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Hypertonic dehydration",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0001986",
                "UMLS:C1112601",
                "MEDDRA:10057218"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0001986"
        },
        "HP:0001195": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Single umbilical artery",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0001195",
                "NCIT:C117359",
                "UMLS:C1384670",
                "MEDDRA:10049807",
                "SNOMEDCT:204470001",
                "MESH:D058529"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0001195"
        },
        "HP:0031369": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Colon perforation",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0031369",
                "NCIT:C78242",
                "UMLS:C0347646",
                "MEDDRA:10009977",
                "MEDDRA:10010001",
                "MEDDRA:10034386",
                "MEDDRA:10034407",
                "MEDDRA:10034418",
                "SNOMEDCT:50257008"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0031369"
        },
        "HP:0030997": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Atretic vas deferens",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0030997",
                "UMLS:C0266445",
                "SNOMEDCT:39513007"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0030997"
        },
        "HP:0002719": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Recurrent infections",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0002719",
                "UMLS:C0239998",
                "UMLS:C0521978",
                "MEDDRA:10067860",
                "SNOMEDCT:102463001",
                "SNOMEDCT:451991000124106"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0002719"
        },
        "HP:0003109": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Hyperphosphaturia",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0003109",
                "NCIT:C67236",
                "UMLS:C0268079",
                "UMLS:C0948023",
                "MEDDRA:10051232",
                "MEDDRA:10051321",
                "SNOMEDCT:22450000"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0003109"
        },
        "HP:0000046": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Scrotal hypoplasia",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0000046"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0000046"
        },
        "HP:0002446": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Astrocytosis",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0002446",
                "UMLS:C3887640"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0002446"
        },
        "MONDO:0007452": {
          "category": [
            "biolink:Disease",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "maturity-onset diabetes of the young type 1",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "MONDO:0007452",
                "DOID:0111099",
                "OMIM:125850",
                "UMLS:C1852093",
                "MESH:C565101",
                "NCIT:C129744",
                "SNOMEDCT:609562003"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "MONDO:0007452"
        },
        "HP:0031284": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Flushing",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0031284"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0031284"
        },
        "HP:0000463": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Anteverted nares",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0000463",
                "UMLS:C1840077",
                "SNOMEDCT:708670007"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0000463"
        },
        "HP:0000103": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Polyuria",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0000103",
                "NCIT:C118303",
                "UMLS:C0032617",
                "MEDDRA:10013524",
                "MEDDRA:10036142",
                "MEDDRA:10046683",
                "SNOMEDCT:28442001",
                "SNOMEDCT:56574000",
                "SNOMEDCT:718402002",
                "MESH:D011141"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0000103"
        },
        "HP:0003487": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Babinski sign",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0003487",
                "NCIT:C43247",
                "UMLS:C0034935",
                "UMLS:C0750948",
                "MEDDRA:10003966",
                "MEDDRA:10015727",
                "MEDDRA:10035157",
                "MEDDRA:10036210",
                "MEDDRA:10036211",
                "MEDDRA:10038238",
                "MEDDRA:10038243",
                "MEDDRA:10038244",
                "MEDDRA:10040672",
                "MEDDRA:10046271",
                "SNOMEDCT:246586009",
                "SNOMEDCT:366575004",
                "MESH:D001405"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0003487"
        },
        "HP:0005487": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Prominent metopic ridge",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0005487",
                "UMLS:C1857949"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0005487"
        },
        "HP:0005102": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Cochlear degeneration",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0005102",
                "UMLS:C1849095"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0005102"
        },
        "HP:0000444": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Convex nasal ridge",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0000444",
                "UMLS:C0240538"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0000444"
        },
        "HP:0004379": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Abnormality of alkaline phosphatase level",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0004379",
                "UMLS:C0740888",
                "UMLS:C4020829",
                "UMLS:C4025328"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0004379"
        },
        "HP:0000331": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Short chin",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0000331",
                "UMLS:C1839323",
                "UMLS:C3697248",
                "SNOMEDCT:699439001"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0000331"
        },
        "HP:0001944": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Dehydration",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0001944",
                "UMLS:C0011175",
                "UMLS:C1136135",
                "MEDDRA:10012174",
                "MEDDRA:10054198",
                "SNOMEDCT:34095006",
                "MESH:D003681"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0001944"
        },
        "HP:0005563": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Decreased numbers of nephrons",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0005563",
                "UMLS:C1841994",
                "UMLS:C2673888"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0005563"
        },
        "HP:0000293": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Full cheeks",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0000293",
                "UMLS:C1866231",
                "UMLS:C2748653",
                "UMLS:C3806443",
                "UMLS:C4280647",
                "UMLS:C4280648"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0000293"
        },
        "HP:0012210": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Abnormal renal morphology",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0012210",
                "UMLS:C4551596",
                "MEDDRA:10023430"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0012210"
        },
        "HP:0001518": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Small for gestational age",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0001518",
                "NCIT:C114934",
                "UMLS:C0024032",
                "UMLS:C0235991",
                "UMLS:C0302511",
                "UMLS:C0456060",
                "UMLS:C1313876",
                "MEDDRA:10004958",
                "MEDDRA:10004959",
                "MEDDRA:10004961",
                "MEDDRA:10004962",
                "MEDDRA:10041093",
                "MEDDRA:10047892",
                "SNOMEDCT:189445003",
                "SNOMEDCT:267258002",
                "SNOMEDCT:276610007",
                "MESH:D007230"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0001518"
        },
        "HP:0002171": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Gliosis",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0002171",
                "NCIT:C26783",
                "UMLS:C0017639",
                "MEDDRA:10008110",
                "MEDDRA:10018341",
                "SNOMEDCT:359580009",
                "SNOMEDCT:81415000",
                "MESH:D005911"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0002171"
        },
        "HP:0040270": {
          "category": [
            "biolink:PhenotypicFeature",
            "biolink:DiseaseOrPhenotypicFeature",
            "biolink:ThingWithTaxon",
            "biolink:BiologicalEntity",
            "biolink:NamedThing",
            "biolink:Entity"
          ],
          "name": "Impaired glucose tolerance",
          "attributes": [
            {
              "type": "NA",
              "value": [
                "HP:0040270",
                "UMLS:C0151671",
                "MEDDRA:10018428",
                "MEDDRA:10043931",
                "MP:0005291"
              ],
              "name": "equivalent_identifiers"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "HP:0040270"
        }
      },
      "edges": {
        "72f574c98a9f6df79174a6c6544d3e1c": {
          "subject": "MONDO:0014523",
          "object": "HP:0002066",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "72f574c98a9f6df79174a6c6544d3e1c"
        },
        "37bf2984fd709fb0b4cacedc812fbfc1": {
          "subject": "MONDO:0010802",
          "object": "HP:0009112",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "37bf2984fd709fb0b4cacedc812fbfc1"
        },
        "351af9a711211da2e0630801682ed399": {
          "subject": "MONDO:0030087",
          "object": "HP:0007334",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "351af9a711211da2e0630801682ed399"
        },
        "2923c2d9de0ffb39842bfe8f08c09460": {
          "subject": "MONDO:0030088",
          "object": "HP:0002919",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "2923c2d9de0ffb39842bfe8f08c09460"
        },
        "e4a042934ba3cbdf1f0861f1125a6ea6": {
          "subject": "MONDO:0012436",
          "object": "HP:0005280",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "e4a042934ba3cbdf1f0861f1125a6ea6"
        },
        "e0511c4e296a1b7767ece7f072a3e267": {
          "subject": "MONDO:0010802",
          "object": "HP:0011629",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "e0511c4e296a1b7767ece7f072a3e267"
        },
        "51460d5bdd29a2dc0bf709e60fde25a6": {
          "subject": "MONDO:0010802",
          "object": "HP:0001660",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "51460d5bdd29a2dc0bf709e60fde25a6"
        },
        "72b3e334dc998d48458deb6d3e490fe0": {
          "subject": "MONDO:0031481",
          "object": "HP:0003241",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "72b3e334dc998d48458deb6d3e490fe0"
        },
        "bb35e3fe8512606067fe0ade76459763": {
          "subject": "MONDO:0022993",
          "object": "HP:0001959",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0004022"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "bb35e3fe8512606067fe0ade76459763"
        },
        "f3f01da1dd8c3c6e66af38000ffd4d5f": {
          "subject": "MONDO:0010581",
          "object": "HP:0001959",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "f3f01da1dd8c3c6e66af38000ffd4d5f"
        },
        "d1368af90f14336c281fcb87c478aa13": {
          "subject": "MONDO:0015790",
          "object": "HP:0001959",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "d1368af90f14336c281fcb87c478aa13"
        },
        "722c97db3aabb7fc4642e19dfa761580": {
          "subject": "MONDO:0007451",
          "object": "HP:0001959",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "722c97db3aabb7fc4642e19dfa761580"
        },
        "42574591073e3433d11a2af0c9a3958b": {
          "subject": "MONDO:0030087",
          "object": "HP:0032794",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "42574591073e3433d11a2af0c9a3958b"
        },
        "afbbb67e6cdad4e59c53bfd7a8f8a319": {
          "subject": "MONDO:0010802",
          "object": "HP:0001537",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "afbbb67e6cdad4e59c53bfd7a8f8a319"
        },
        "5ae4af69fbe2f9ef37775edffde2938d": {
          "subject": "MONDO:0012436",
          "object": "HP:0001537",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "5ae4af69fbe2f9ef37775edffde2938d"
        },
        "5ecb3498d8d55415fd81f64743fc6696": {
          "subject": "MONDO:0012436",
          "object": "HP:0000286",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "5ecb3498d8d55415fd81f64743fc6696"
        },
        "1a03657d92138472604c4b6d8d0590c5": {
          "subject": "MONDO:0030088",
          "object": "HP:0012434",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "1a03657d92138472604c4b6d8d0590c5"
        },
        "7aa1cd2682e3f85e964a1813603e2381": {
          "subject": "MONDO:0030089",
          "object": "HP:0040217",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "7aa1cd2682e3f85e964a1813603e2381"
        },
        "b906568a586bf9fb894ef8f764ee838c": {
          "subject": "MONDO:0100165",
          "object": "HP:0040217",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "b906568a586bf9fb894ef8f764ee838c"
        },
        "d54418fb9c9ae70b59dde645a199a1f8": {
          "subject": "MONDO:0012522",
          "object": "HP:0040217",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "d54418fb9c9ae70b59dde645a199a1f8"
        },
        "49970b8bc65ef9bb2d35ba3761ded4d4": {
          "subject": "MONDO:0031481",
          "object": "HP:0011968",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "49970b8bc65ef9bb2d35ba3761ded4d4"
        },
        "38977f38313b535be7f462e175cc5e9f": {
          "subject": "MONDO:0010785",
          "object": "HP:0001260",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "38977f38313b535be7f462e175cc5e9f"
        },
        "8d725884da55c75fd54e86fecbe770a5": {
          "subject": "MONDO:0007450",
          "object": "HP:0003196",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "8d725884da55c75fd54e86fecbe770a5"
        },
        "0aa7194fa870bd44b28a992917ada714": {
          "subject": "MONDO:0031481",
          "object": "HP:0000218",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "0aa7194fa870bd44b28a992917ada714"
        },
        "297e54b8d91ed69efcbfb4f48d6015cc": {
          "subject": "MONDO:0008242",
          "object": "HP:0007164",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "297e54b8d91ed69efcbfb4f48d6015cc"
        },
        "484aadb651a31d3d3e2ecfb321bd7686": {
          "subject": "MONDO:0008242",
          "object": "HP:0001289",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "484aadb651a31d3d3e2ecfb321bd7686"
        },
        "b7ba8b670efc34f4235f6ccd0c1bd90e": {
          "subject": "MONDO:0007669",
          "object": "HP:0002120",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "b7ba8b670efc34f4235f6ccd0c1bd90e"
        },
        "a06d8e4715a782cdb42430c4d1f550ed": {
          "subject": "MONDO:0012192",
          "object": "HP:0000377",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "a06d8e4715a782cdb42430c4d1f550ed"
        },
        "51b816cd8235dd2c0d7bbf8725711d60": {
          "subject": "MONDO:0007669",
          "object": "HP:0012207",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "51b816cd8235dd2c0d7bbf8725711d60"
        },
        "05acfb9b187ff9d2aaa5bf71f66d4a2f": {
          "subject": "MONDO:0030087",
          "object": "HP:0001488",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "05acfb9b187ff9d2aaa5bf71f66d4a2f"
        },
        "a2bf262be5b3b4f5e8e45dcf788284d3": {
          "subject": "MONDO:0031481",
          "object": "HP:0000252",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "a2bf262be5b3b4f5e8e45dcf788284d3"
        },
        "37af9b09ba037eacfc7d62d9d41f0276": {
          "subject": "MONDO:0012192",
          "object": "HP:0000252",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "37af9b09ba037eacfc7d62d9d41f0276"
        },
        "8e9af39cc99432919062604fe42d5e15": {
          "subject": "MONDO:0010802",
          "object": "HP:0000252",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "8e9af39cc99432919062604fe42d5e15"
        },
        "243ce2e16ec9d6c423745ccba08ab306": {
          "subject": "MONDO:0012192",
          "object": "HP:0000325",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "243ce2e16ec9d6c423745ccba08ab306"
        },
        "201d42ab930c539b34414b051b2933b5": {
          "subject": "MONDO:0030089",
          "object": "HP:0030795",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "201d42ab930c539b34414b051b2933b5"
        },
        "6c58030d3c0df800ffb2b6226c610c30": {
          "subject": "MONDO:0100165",
          "object": "HP:0030795",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "6c58030d3c0df800ffb2b6226c610c30"
        },
        "69a6b548a4322ae3ffce30c7ad8d9896": {
          "subject": "MONDO:0030087",
          "object": "HP:0030795",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "69a6b548a4322ae3ffce30c7ad8d9896"
        },
        "82473f7835f4274f1791d4fca8a66a46": {
          "subject": "MONDO:0031481",
          "object": "HP:0002756",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "82473f7835f4274f1791d4fca8a66a46"
        },
        "8fb1245e83c9409592589303c48a0f7e": {
          "subject": "MONDO:0012348",
          "object": "HP:0002027",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "8fb1245e83c9409592589303c48a0f7e"
        },
        "601d00073b31469c8025f60074528283": {
          "subject": "MONDO:0007669",
          "object": "HP:0003259",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "601d00073b31469c8025f60074528283"
        },
        "d9184293552e3edd65f4aad9444a6a11": {
          "subject": "MONDO:0007450",
          "object": "HP:0000316",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "d9184293552e3edd65f4aad9444a6a11"
        },
        "b91726350d337b85cc90311496c4b4ba": {
          "subject": "MONDO:0007450",
          "object": "HP:0000343",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "b91726350d337b85cc90311496c4b4ba"
        },
        "c9b82ea9e70b99fcc13b4a2a64197989": {
          "subject": "MONDO:0012436",
          "object": "HP:0000343",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "c9b82ea9e70b99fcc13b4a2a64197989"
        },
        "2326f765c7ca386b306c307202593742": {
          "subject": "MONDO:0030088",
          "object": "HP:0003698",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "2326f765c7ca386b306c307202593742"
        },
        "07fe2814e5b57f06069d991e9caac653": {
          "subject": "MONDO:0010581",
          "object": "HP:0000021",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "07fe2814e5b57f06069d991e9caac653"
        },
        "49db1bf24410359cfe37fe9a4f70a807": {
          "subject": "MONDO:0007451",
          "object": "HP:0000021",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "49db1bf24410359cfe37fe9a4f70a807"
        },
        "2baaca3555df1745d44056e8c01f9d0c": {
          "subject": "MONDO:0012192",
          "object": "HP:0002104",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "2baaca3555df1745d44056e8c01f9d0c"
        },
        "926c80b6c91efb10ca31f2f612e7306e": {
          "subject": "MONDO:0012436",
          "object": "HP:0030423",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "926c80b6c91efb10ca31f2f612e7306e"
        },
        "dae217f92a40edffdf6f2530edf304da": {
          "subject": "MONDO:0031481",
          "object": "HP:0002910",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "dae217f92a40edffdf6f2530edf304da"
        },
        "cf9d42906200ace658ad0530fad03a21": {
          "subject": "MONDO:0007669",
          "object": "HP:0002910",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "cf9d42906200ace658ad0530fad03a21"
        },
        "62ae1ea3c3063a00794e043716d32a3d": {
          "subject": "MONDO:0011073",
          "object": "HP:0001525",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "62ae1ea3c3063a00794e043716d32a3d"
        },
        "b71440ac4c2a88cf203a830d06c024d6": {
          "subject": "MONDO:0030088",
          "object": "HP:0001290",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "b71440ac4c2a88cf203a830d06c024d6"
        },
        "5e86025b5bd78576cb8b18ffa6d5867a": {
          "subject": "MONDO:0010581",
          "object": "HP:0000737",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "5e86025b5bd78576cb8b18ffa6d5867a"
        },
        "999ec77bf768dc94964f303123766307": {
          "subject": "MONDO:0007451",
          "object": "HP:0000737",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "999ec77bf768dc94964f303123766307"
        },
        "8988557302a7ee012dd836a96a431667": {
          "subject": "MONDO:0007669",
          "object": "HP:0100611",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "8988557302a7ee012dd836a96a431667"
        },
        "a0dbf352923bfeeb102c3134f5ba99be": {
          "subject": "MONDO:0010581",
          "object": "HP:0003228",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "a0dbf352923bfeeb102c3134f5ba99be"
        },
        "67e1312db439280b4d0362e1f988cce8": {
          "subject": "MONDO:0007451",
          "object": "HP:0003228",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "67e1312db439280b4d0362e1f988cce8"
        },
        "2dae6510fcb0d3a4b174fcfcd01211eb": {
          "subject": "MONDO:0010785",
          "object": "HP:0002317",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "2dae6510fcb0d3a4b174fcfcd01211eb"
        },
        "f8acd3df866c2d91cd76f507bac0d5c2": {
          "subject": "MONDO:0030088",
          "object": "HP:0001324",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "f8acd3df866c2d91cd76f507bac0d5c2"
        },
        "6e2e69955e4f53b98ad9974154d32d47": {
          "subject": "MONDO:0031481",
          "object": "HP:0010804",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "6e2e69955e4f53b98ad9974154d32d47"
        },
        "881622e672a74efd63c2e6a87ca3d7aa": {
          "subject": "MONDO:0010802",
          "object": "HP:0011682",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "881622e672a74efd63c2e6a87ca3d7aa"
        },
        "9e177fdaa34d54821e00c748a297ca67": {
          "subject": "MONDO:0031481",
          "object": "HP:0002205",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "9e177fdaa34d54821e00c748a297ca67"
        },
        "0767c97e995b7f74adb124c44518b6dc": {
          "subject": "MONDO:0012436",
          "object": "HP:0001737",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "0767c97e995b7f74adb124c44518b6dc"
        },
        "ccc2fb079b82e04d1c8bc47aaa0b3bce": {
          "subject": "MONDO:0007450",
          "object": "HP:0001939",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "ccc2fb079b82e04d1c8bc47aaa0b3bce"
        },
        "46bd37875dea004a4b5ee89fbf7eda63": {
          "subject": "MONDO:0031481",
          "object": "HP:0001263",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "46bd37875dea004a4b5ee89fbf7eda63"
        },
        "f054829332046c1512d43d45224e698a": {
          "subject": "MONDO:0010802",
          "object": "HP:0001263",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "f054829332046c1512d43d45224e698a"
        },
        "0e04b0a85646bd8427439bc731e1b889": {
          "subject": "MONDO:0012436",
          "object": "HP:0001263",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "0e04b0a85646bd8427439bc731e1b889"
        },
        "9abdec98c57fed4957b3a4131f8cdc9e": {
          "subject": "MONDO:0030087",
          "object": "HP:0001263",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "9abdec98c57fed4957b3a4131f8cdc9e"
        },
        "0631daecf88fb566b24cefa3c80ce4e1": {
          "subject": "MONDO:0010581",
          "object": "HP:0002013",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "0631daecf88fb566b24cefa3c80ce4e1"
        },
        "08c8e428e707bff409415ef179c1dfd0": {
          "subject": "MONDO:0007451",
          "object": "HP:0002013",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "08c8e428e707bff409415ef179c1dfd0"
        },
        "ccd5796368067d97ff198e0f1f369060": {
          "subject": "MONDO:0010581",
          "object": "HP:0001955",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "ccd5796368067d97ff198e0f1f369060"
        },
        "7e79d0e5fa071d0ce1111b7de9489bcf": {
          "subject": "MONDO:0007451",
          "object": "HP:0001955",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "7e79d0e5fa071d0ce1111b7de9489bcf"
        },
        "abf07362caab44c660ff2498787024bc": {
          "subject": "MONDO:0008242",
          "object": "HP:0000666",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "abf07362caab44c660ff2498787024bc"
        },
        "a312fb4cf3e1b68855d782559eb34f64": {
          "subject": "MONDO:0008843",
          "object": "HP:0001317",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "a312fb4cf3e1b68855d782559eb34f64"
        },
        "7adc20e575f4e20398f5c4be59addf5d": {
          "subject": "MONDO:0012192",
          "object": "HP:0010557",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "7adc20e575f4e20398f5c4be59addf5d"
        },
        "5d892bfa6049851a075b470fb4f4956f": {
          "subject": "MONDO:0012436",
          "object": "HP:0001744",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "5d892bfa6049851a075b470fb4f4956f"
        },
        "67f181c231b083e72355944d966ae750": {
          "subject": "MONDO:0014523",
          "object": "HP:0001284",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "67f181c231b083e72355944d966ae750"
        },
        "bafa0d913c2dc7e78cd98d05278a6973": {
          "subject": "MONDO:0012192",
          "object": "HP:0001387",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "bafa0d913c2dc7e78cd98d05278a6973"
        },
        "9b93e8f93a142bf4a1f8d92e156790b0": {
          "subject": "MONDO:0014523",
          "object": "HP:0007366",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "9b93e8f93a142bf4a1f8d92e156790b0"
        },
        "57fb1643165252f168bf71e0e9ac22b8": {
          "subject": "MONDO:0005147",
          "object": "HP:0006476",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0004022"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "57fb1643165252f168bf71e0e9ac22b8"
        },
        "87b0d725d20d76bfbbfffa9c2f8be4b7": {
          "subject": "MONDO:0010802",
          "object": "HP:0004415",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "87b0d725d20d76bfbbfffa9c2f8be4b7"
        },
        "0bf145c14adcd3130d48b4f9293355f1": {
          "subject": "MONDO:0030087",
          "object": "HP:0002714",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "0bf145c14adcd3130d48b4f9293355f1"
        },
        "8be3174a3ff57ae044779870894c3330": {
          "subject": "MONDO:0012192",
          "object": "HP:0012642",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "8be3174a3ff57ae044779870894c3330"
        },
        "a6a5ebd58acc195443ed95d4f9386d75": {
          "subject": "MONDO:0012192",
          "object": "HP:0002594",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "a6a5ebd58acc195443ed95d4f9386d75"
        },
        "d333d2d06625df3c0404ea5ac45a4ce8": {
          "subject": "MONDO:0007669",
          "object": "HP:0002594",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "d333d2d06625df3c0404ea5ac45a4ce8"
        },
        "d6660e7d11d03c67a3e110f66133aa21": {
          "subject": "MONDO:0010802",
          "object": "HP:0002594",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "d6660e7d11d03c67a3e110f66133aa21"
        },
        "f122ff46206a7f79354f2d3e0d32a91c": {
          "subject": "MONDO:0012436",
          "object": "HP:0002594",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "f122ff46206a7f79354f2d3e0d32a91c"
        },
        "da6682ccb2e67223112d9dd8dd98eb65": {
          "subject": "MONDO:0031481",
          "object": "HP:0000341",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "da6682ccb2e67223112d9dd8dd98eb65"
        },
        "fac9e02e721d9e31f118b1f35accce7d": {
          "subject": "MONDO:0007450",
          "object": "HP:0000445",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "fac9e02e721d9e31f118b1f35accce7d"
        },
        "d74b1d1b6bd370c12549a2f930a6956f": {
          "subject": "MONDO:0007669",
          "object": "HP:0000078",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "d74b1d1b6bd370c12549a2f930a6956f"
        },
        "14bf69af2cb4682c1c37d51834b74705": {
          "subject": "MONDO:0005148",
          "object": "HP:0000855",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "14bf69af2cb4682c1c37d51834b74705"
        },
        "7626eb4804520ad1c5aaeb354bd864d8": {
          "subject": "MONDO:0005148",
          "object": "HP:0000855",
          "predicate": "biolink:correlated_with",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0004029"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "7626eb4804520ad1c5aaeb354bd864d8"
        },
        "653ec6f99255f973840d587aa6dd8563": {
          "subject": "MONDO:0031481",
          "object": "HP:0002079",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "653ec6f99255f973840d587aa6dd8563"
        },
        "0036bfff38f786ebddb266159c2b1edc": {
          "subject": "MONDO:0010813",
          "object": "HP:0001438",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "0036bfff38f786ebddb266159c2b1edc"
        },
        "ba4068283772d8fde2e760728714093f": {
          "subject": "MONDO:0012192",
          "object": "HP:0000768",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "ba4068283772d8fde2e760728714093f"
        },
        "45c597e9d010374ec3ac93799ea2e1de": {
          "subject": "MONDO:0010581",
          "object": "HP:0004322",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "45c597e9d010374ec3ac93799ea2e1de"
        },
        "f961b4c1c05e1416c1328ef65fc2e7e1": {
          "subject": "MONDO:0014458",
          "object": "HP:0004322",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "f961b4c1c05e1416c1328ef65fc2e7e1"
        },
        "789e2535768fd466c10f956d723ef12f": {
          "subject": "MONDO:0007451",
          "object": "HP:0004322",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "789e2535768fd466c10f956d723ef12f"
        },
        "3d5e20be86d6021f2988927f41c4be2b": {
          "subject": "MONDO:0014523",
          "object": "HP:0004322",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "3d5e20be86d6021f2988927f41c4be2b"
        },
        "ef2867ef703d0ad73742927b4a564da6": {
          "subject": "MONDO:0030088",
          "object": "HP:0001270",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "ef2867ef703d0ad73742927b4a564da6"
        },
        "f4a0a4dc7f90e9afeae9fd44aeea8813": {
          "subject": "MONDO:0031481",
          "object": "HP:0002187",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "f4a0a4dc7f90e9afeae9fd44aeea8813"
        },
        "61cfbb6d86bf7d0122d9d2fcee23a411": {
          "subject": "MONDO:0010802",
          "object": "HP:0000023",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "61cfbb6d86bf7d0122d9d2fcee23a411"
        },
        "e7ddd58d14c851598cc779945fa77e33": {
          "subject": "MONDO:0008242",
          "object": "HP:0000751",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "e7ddd58d14c851598cc779945fa77e33"
        },
        "d464a8c34f227a63ec9a37cd31ca651c": {
          "subject": "MONDO:0031481",
          "object": "HP:0012594",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "d464a8c34f227a63ec9a37cd31ca651c"
        },
        "9d3c17bdb3713aab9cd67e2f45d96176": {
          "subject": "MONDO:0010785",
          "object": "HP:0001133",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "9d3c17bdb3713aab9cd67e2f45d96176"
        },
        "3f6c2588926d6c0e23d75b5021307743": {
          "subject": "MONDO:0005148",
          "object": "HP:0031819",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "3f6c2588926d6c0e23d75b5021307743"
        },
        "3c462531445aa81fe021a2c590ce9ac4": {
          "subject": "MONDO:0031481",
          "object": "HP:0012448",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "3c462531445aa81fe021a2c590ce9ac4"
        },
        "74f07d5037ce7603285936fd86f11b2e": {
          "subject": "MONDO:0007669",
          "object": "HP:0003076",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "74f07d5037ce7603285936fd86f11b2e"
        },
        "ff772aa170d50ae55eeeb66555664e40": {
          "subject": "MONDO:0010802",
          "object": "HP:0003076",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "ff772aa170d50ae55eeeb66555664e40"
        },
        "8dcb4c7c1c3b31a176ec878fee9eb94d": {
          "subject": "MONDO:0014458",
          "object": "HP:0003076",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "8dcb4c7c1c3b31a176ec878fee9eb94d"
        },
        "1fb76ab0a55f83d57654045b03d53f06": {
          "subject": "MONDO:0030088",
          "object": "HP:0003076",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "1fb76ab0a55f83d57654045b03d53f06"
        },
        "c6ce04b4b9b122d86d8ff5410b435afc": {
          "subject": "MONDO:0030087",
          "object": "HP:0001993",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "c6ce04b4b9b122d86d8ff5410b435afc"
        },
        "52e9a61ea56e403103e735f9c16dcc36": {
          "subject": "MONDO:0008843",
          "object": "HP:0007201",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "52e9a61ea56e403103e735f9c16dcc36"
        },
        "d8977920db81cfc6e2c29a9f8973d465": {
          "subject": "MONDO:0014458",
          "object": "HP:0001520",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "d8977920db81cfc6e2c29a9f8973d465"
        },
        "51aa26e290a3c81c2479208c39314618": {
          "subject": "MONDO:0013242",
          "object": "HP:0025502",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "51aa26e290a3c81c2479208c39314618"
        },
        "c6232ceb9be65554473af8260efd3699": {
          "subject": "MONDO:0014523",
          "object": "HP:0100543",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "c6232ceb9be65554473af8260efd3699"
        },
        "8391820146a59b64f3533d7a6cb30b98": {
          "subject": "MONDO:0012192",
          "object": "HP:0003758",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "8391820146a59b64f3533d7a6cb30b98"
        },
        "c0d12db45c4ca4267a2b9d88956fbb3c": {
          "subject": "MONDO:0031481",
          "object": "HP:0001319",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "c0d12db45c4ca4267a2b9d88956fbb3c"
        },
        "202a1bae3c4aa2c86636cabcf1606347": {
          "subject": "MONDO:0031481",
          "object": "HP:0009879",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "202a1bae3c4aa2c86636cabcf1606347"
        },
        "c0f06eccb9f8c247585f029474f343a6": {
          "subject": "MONDO:0012436",
          "object": "HP:0000260",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "c0f06eccb9f8c247585f029474f343a6"
        },
        "0d72ffe450070fcf8bebff7ba05b4199": {
          "subject": "MONDO:0014523",
          "object": "HP:0002059",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "0d72ffe450070fcf8bebff7ba05b4199"
        },
        "c7e1fe4608bc4c2ffa969e5409a7cc08": {
          "subject": "MONDO:0012192",
          "object": "HP:0000369",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "c7e1fe4608bc4c2ffa969e5409a7cc08"
        },
        "496c4694ae07abe6a9ae59c91c6361d1": {
          "subject": "MONDO:0012436",
          "object": "HP:0000369",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "496c4694ae07abe6a9ae59c91c6361d1"
        },
        "1a567cc1be2aeaf95aaf03ac75902cdf": {
          "subject": "MONDO:0031481",
          "object": "HP:0000952",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "1a567cc1be2aeaf95aaf03ac75902cdf"
        },
        "9c8bece27098200104252d8a91215be5": {
          "subject": "MONDO:0012436",
          "object": "HP:0002944",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "9c8bece27098200104252d8a91215be5"
        },
        "b290d04d5890e23c33ff7771026ea761": {
          "subject": "MONDO:0010785",
          "object": "HP:0000580",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "b290d04d5890e23c33ff7771026ea761"
        },
        "3e38e4f2b9bf92804d162f8aa70a7f10": {
          "subject": "MONDO:0007669",
          "object": "HP:0000077",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "3e38e4f2b9bf92804d162f8aa70a7f10"
        },
        "6a9c3c11cbd6b781ed8733cd2d53bada": {
          "subject": "MONDO:0010581",
          "object": "HP:0008872",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "6a9c3c11cbd6b781ed8733cd2d53bada"
        },
        "69903964173648faa2374e21b687e3b5": {
          "subject": "MONDO:0007451",
          "object": "HP:0008872",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "69903964173648faa2374e21b687e3b5"
        },
        "237cfdcec30985416bcc16063df6667e": {
          "subject": "MONDO:0010785",
          "object": "HP:0001751",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "237cfdcec30985416bcc16063df6667e"
        },
        "ec484a1a1158bebb1c383e5d33788666": {
          "subject": "MONDO:0030088",
          "object": "HP:0002305",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "ec484a1a1158bebb1c383e5d33788666"
        },
        "31cce92f4d3ab4a443292a3ec8ef19be": {
          "subject": "MONDO:0014458",
          "object": "HP:0003537",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "31cce92f4d3ab4a443292a3ec8ef19be"
        },
        "e1eac0947d7eceeb92ee794e3bc097da": {
          "subject": "MONDO:0010802",
          "object": "HP:0011573",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "e1eac0947d7eceeb92ee794e3bc097da"
        },
        "c708e35c5250dca846445e10a962b916": {
          "subject": "MONDO:0010802",
          "object": "HP:0000073",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "c708e35c5250dca846445e10a962b916"
        },
        "2470307de035f6887e6d2f200e66c26a": {
          "subject": "MONDO:0012436",
          "object": "HP:0004442",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "2470307de035f6887e6d2f200e66c26a"
        },
        "48f53cea7b3c1830d102b6e9dcb55c41": {
          "subject": "MONDO:0031481",
          "object": "HP:0008936",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "48f53cea7b3c1830d102b6e9dcb55c41"
        },
        "792f792d97b6a8fb941ac721c7dca621": {
          "subject": "MONDO:0012348",
          "object": "HP:0012092",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "792f792d97b6a8fb941ac721c7dca621"
        },
        "dcf0035f916bb4854956f87d9e99abbf": {
          "subject": "MONDO:0030088",
          "object": "HP:0011182",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "dcf0035f916bb4854956f87d9e99abbf"
        },
        "1d99610b8f7245c14fb561f7138cd1d6": {
          "subject": "MONDO:0015790",
          "object": "HP:0001948",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "1d99610b8f7245c14fb561f7138cd1d6"
        },
        "bc0676d58f47d10d35365d3a56888820": {
          "subject": "MONDO:0010813",
          "object": "HP:0000857",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "bc0676d58f47d10d35365d3a56888820"
        },
        "9994fcc17beadb172f5a9f8c98b3f6af": {
          "subject": "MONDO:0012436",
          "object": "HP:0001395",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "9994fcc17beadb172f5a9f8c98b3f6af"
        },
        "9cf290a01ef2c4d80fb8761f226ceb66": {
          "subject": "MONDO:0030087",
          "object": "HP:0002069",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "9cf290a01ef2c4d80fb8761f226ceb66"
        },
        "29b7293adb191bfb28375b3909d619aa": {
          "subject": "MONDO:0012436",
          "object": "HP:0000219",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "29b7293adb191bfb28375b3909d619aa"
        },
        "411049c99a5d225c6b804c5b6cde8cdc": {
          "subject": "MONDO:0031481",
          "object": "HP:0002521",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "411049c99a5d225c6b804c5b6cde8cdc"
        },
        "365800f2145da658edb90b27bcfc7662": {
          "subject": "MONDO:0030087",
          "object": "HP:0002521",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "365800f2145da658edb90b27bcfc7662"
        },
        "8244677a623518adc30e5c1deeea7bf6": {
          "subject": "MONDO:0008242",
          "object": "HP:0000408",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "8244677a623518adc30e5c1deeea7bf6"
        },
        "466ac1a4184497fd6eca54a73fa8710e": {
          "subject": "MONDO:0007669",
          "object": "HP:0002149",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "466ac1a4184497fd6eca54a73fa8710e"
        },
        "04684185427174ae615e45c429184eb5": {
          "subject": "MONDO:0014458",
          "object": "HP:0002240",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "04684185427174ae615e45c429184eb5"
        },
        "c44a5a176a668d2ead40c083e677901c": {
          "subject": "MONDO:0012436",
          "object": "HP:0002240",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "c44a5a176a668d2ead40c083e677901c"
        },
        "e50100eaf8e4171c799a03167a965e93": {
          "subject": "MONDO:0012192",
          "object": "HP:0001508",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "e50100eaf8e4171c799a03167a965e93"
        },
        "eba8e4019b6c6dd290f29a1f299e243e": {
          "subject": "MONDO:0010802",
          "object": "HP:0001508",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "eba8e4019b6c6dd290f29a1f299e243e"
        },
        "6febb513f14146b633662e6b9d4ce9f9": {
          "subject": "MONDO:0010581",
          "object": "HP:0001508",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "6febb513f14146b633662e6b9d4ce9f9"
        },
        "33355b42f40fd75224022432cf11f866": {
          "subject": "MONDO:0007451",
          "object": "HP:0001508",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "33355b42f40fd75224022432cf11f866"
        },
        "0a5341a2518307a926b3da7a57c752f4": {
          "subject": "MONDO:0012192",
          "object": "HP:0001265",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "0a5341a2518307a926b3da7a57c752f4"
        },
        "4cb0f3799ee4c26768cbddc695b151cb": {
          "subject": "MONDO:0031481",
          "object": "HP:0001348",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "4cb0f3799ee4c26768cbddc695b151cb"
        },
        "a4fac8947539a07bce6d882b6f21ca91": {
          "subject": "MONDO:0008242",
          "object": "HP:0001327",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "a4fac8947539a07bce6d882b6f21ca91"
        },
        "08cb91b5ce5fd16715f04c88dfa02f7c": {
          "subject": "MONDO:0008843",
          "object": "HP:0001327",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "08cb91b5ce5fd16715f04c88dfa02f7c"
        },
        "63f154fe033b6b4ca7d50b26cc057951": {
          "subject": "MONDO:0010581",
          "object": "HP:0001986",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "63f154fe033b6b4ca7d50b26cc057951"
        },
        "7beeb6a1d9af33ede22efb9876d26549": {
          "subject": "MONDO:0007451",
          "object": "HP:0001986",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "7beeb6a1d9af33ede22efb9876d26549"
        },
        "68b4ed8795c61c185124d2da5dfe0131": {
          "subject": "MONDO:0010802",
          "object": "HP:0001195",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "68b4ed8795c61c185124d2da5dfe0131"
        },
        "614ea6dd7e6e8449019f60cd554f2bb8": {
          "subject": "MONDO:0010802",
          "object": "HP:0031369",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "614ea6dd7e6e8449019f60cd554f2bb8"
        },
        "38650e4a07ca7c7ba6c3e6bbe6d4cd86": {
          "subject": "MONDO:0007669",
          "object": "HP:0030997",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "38650e4a07ca7c7ba6c3e6bbe6d4cd86"
        },
        "fe8ff28949c0e790a3b5a7d4bda7438f": {
          "subject": "MONDO:0012436",
          "object": "HP:0002719",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "fe8ff28949c0e790a3b5a7d4bda7438f"
        },
        "b7fb21983e694ef74d22bc08b33f2aec": {
          "subject": "MONDO:0014458",
          "object": "HP:0003109",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "b7fb21983e694ef74d22bc08b33f2aec"
        },
        "11a567452a1fc1ef869090285d1089b7": {
          "subject": "MONDO:0031481",
          "object": "HP:0000046",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "11a567452a1fc1ef869090285d1089b7"
        },
        "1974a9fbfd29a28de60f4483fc65c2b1": {
          "subject": "MONDO:0008242",
          "object": "HP:0002446",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "1974a9fbfd29a28de60f4483fc65c2b1"
        },
        "987c54d297c5572d9bd174627bd071eb": {
          "subject": "MONDO:0007452",
          "object": "HP:0031284",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "987c54d297c5572d9bd174627bd071eb"
        },
        "44345e96cbacacf247e7abfce845f454": {
          "subject": "MONDO:0031481",
          "object": "HP:0000463",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "44345e96cbacacf247e7abfce845f454"
        },
        "1f3d6f020e9abcfd3c200a4095486f5b": {
          "subject": "MONDO:0010581",
          "object": "HP:0000103",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "1f3d6f020e9abcfd3c200a4095486f5b"
        },
        "79dc27cb79f39a874dce6a434d16073e": {
          "subject": "MONDO:0015790",
          "object": "HP:0000103",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "79dc27cb79f39a874dce6a434d16073e"
        },
        "7f8e3b0ecb6890a0906a7087d2c87366": {
          "subject": "MONDO:0007451",
          "object": "HP:0000103",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "7f8e3b0ecb6890a0906a7087d2c87366"
        },
        "10004cc14f75612d8347234d2c2bfcc3": {
          "subject": "MONDO:0014523",
          "object": "HP:0003487",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "10004cc14f75612d8347234d2c2bfcc3"
        },
        "1c625932ea9e61579629e46cec60188f": {
          "subject": "MONDO:0030087",
          "object": "HP:0005487",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "1c625932ea9e61579629e46cec60188f"
        },
        "ce97d32c3fb169a55c535e75df615425": {
          "subject": "MONDO:0008242",
          "object": "HP:0005102",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "ce97d32c3fb169a55c535e75df615425"
        },
        "38723240083a68736363a0dca06a0d47": {
          "subject": "MONDO:0012192",
          "object": "HP:0000444",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "38723240083a68736363a0dca06a0d47"
        },
        "7e5d1946a4f89035a79c9ecce0992f04": {
          "subject": "MONDO:0007669",
          "object": "HP:0004379",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "7e5d1946a4f89035a79c9ecce0992f04"
        },
        "d9e3c3071c84196249d15fcbc8e63ed5": {
          "subject": "MONDO:0012192",
          "object": "HP:0000331",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "d9e3c3071c84196249d15fcbc8e63ed5"
        },
        "2d9d107968a4c383c599495dd5a83878": {
          "subject": "MONDO:0011073",
          "object": "HP:0001944",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "2d9d107968a4c383c599495dd5a83878"
        },
        "e02e15acd4514e43ea1d2d7863dda89c": {
          "subject": "MONDO:0007669",
          "object": "HP:0005563",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "e02e15acd4514e43ea1d2d7863dda89c"
        },
        "99fd613e2cc70f7aed5956ab69016463": {
          "subject": "MONDO:0031481",
          "object": "HP:0000293",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "99fd613e2cc70f7aed5956ab69016463"
        },
        "6f3b338acd68d48e1070971722084eed": {
          "subject": "MONDO:0007669",
          "object": "HP:0012210",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "6f3b338acd68d48e1070971722084eed"
        },
        "fb01d23a8c8c706d2c26497226076e3a": {
          "subject": "MONDO:0030089",
          "object": "HP:0001518",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "fb01d23a8c8c706d2c26497226076e3a"
        },
        "5b9b0ba1b87b10530b6ad46ac91c346c": {
          "subject": "MONDO:0100165",
          "object": "HP:0001518",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "5b9b0ba1b87b10530b6ad46ac91c346c"
        },
        "1bf5a981012915959dfd8fce76bed8b7": {
          "subject": "MONDO:0030088",
          "object": "HP:0001518",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "1bf5a981012915959dfd8fce76bed8b7"
        },
        "c03488800b5c254fb66ee74a6cea945c": {
          "subject": "MONDO:0007450",
          "object": "HP:0002171",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "c03488800b5c254fb66ee74a6cea945c"
        },
        "4b9266f35608dc10c1901e5432f4deaf": {
          "subject": "MONDO:0007669",
          "object": "HP:0040270",
          "predicate": "biolink:has_phenotype",
          "attributes": [
            {
              "type": "NA",
              "name": "relation",
              "value": "RO:0002200"
            },
            {
              "name": "reasoner",
              "value": [
                "redis:test"
              ],
              "type": "EDAM:data_0006"
            }
          ],
          "id": "4b9266f35608dc10c1901e5432f4deaf"
        }
      }
    },
    "results": [
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0014523"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0002066"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "72f574c98a9f6df79174a6c6544d3e1c"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0010802"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0009112"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "37bf2984fd709fb0b4cacedc812fbfc1"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0030087"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0007334"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "351af9a711211da2e0630801682ed399"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0030088"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0002919"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "2923c2d9de0ffb39842bfe8f08c09460"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0012436"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0005280"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "e4a042934ba3cbdf1f0861f1125a6ea6"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0010802"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0011629"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "e0511c4e296a1b7767ece7f072a3e267"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0010802"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001660"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "51460d5bdd29a2dc0bf709e60fde25a6"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0031481"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0003241"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "72b3e334dc998d48458deb6d3e490fe0"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0022993"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001959"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "bb35e3fe8512606067fe0ade76459763"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0010581"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001959"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "f3f01da1dd8c3c6e66af38000ffd4d5f"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0015790"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001959"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "d1368af90f14336c281fcb87c478aa13"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0007451"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001959"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "722c97db3aabb7fc4642e19dfa761580"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0030087"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0032794"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "42574591073e3433d11a2af0c9a3958b"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0010802"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001537"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "afbbb67e6cdad4e59c53bfd7a8f8a319"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0012436"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001537"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "5ae4af69fbe2f9ef37775edffde2938d"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0012436"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0000286"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "5ecb3498d8d55415fd81f64743fc6696"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0030088"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0012434"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "1a03657d92138472604c4b6d8d0590c5"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0030089"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0040217"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "7aa1cd2682e3f85e964a1813603e2381"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0100165"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0040217"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "b906568a586bf9fb894ef8f764ee838c"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0012522"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0040217"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "d54418fb9c9ae70b59dde645a199a1f8"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0031481"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0011968"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "49970b8bc65ef9bb2d35ba3761ded4d4"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0010785"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001260"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "38977f38313b535be7f462e175cc5e9f"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0007450"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0003196"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "8d725884da55c75fd54e86fecbe770a5"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0031481"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0000218"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "0aa7194fa870bd44b28a992917ada714"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0008242"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0007164"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "297e54b8d91ed69efcbfb4f48d6015cc"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0008242"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001289"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "484aadb651a31d3d3e2ecfb321bd7686"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0007669"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0002120"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "b7ba8b670efc34f4235f6ccd0c1bd90e"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0012192"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0000377"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "a06d8e4715a782cdb42430c4d1f550ed"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0007669"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0012207"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "51b816cd8235dd2c0d7bbf8725711d60"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0030087"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001488"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "05acfb9b187ff9d2aaa5bf71f66d4a2f"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0031481"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0000252"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "a2bf262be5b3b4f5e8e45dcf788284d3"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0012192"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0000252"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "37af9b09ba037eacfc7d62d9d41f0276"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0010802"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0000252"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "8e9af39cc99432919062604fe42d5e15"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0012192"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0000325"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "243ce2e16ec9d6c423745ccba08ab306"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0030089"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0030795"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "201d42ab930c539b34414b051b2933b5"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0100165"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0030795"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "6c58030d3c0df800ffb2b6226c610c30"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0030087"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0030795"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "69a6b548a4322ae3ffce30c7ad8d9896"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0031481"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0002756"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "82473f7835f4274f1791d4fca8a66a46"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0012348"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0002027"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "8fb1245e83c9409592589303c48a0f7e"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0007669"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0003259"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "601d00073b31469c8025f60074528283"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0007450"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0000316"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "d9184293552e3edd65f4aad9444a6a11"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0007450"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0000343"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "b91726350d337b85cc90311496c4b4ba"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0012436"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0000343"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "c9b82ea9e70b99fcc13b4a2a64197989"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0030088"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0003698"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "2326f765c7ca386b306c307202593742"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0010581"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0000021"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "07fe2814e5b57f06069d991e9caac653"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0007451"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0000021"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "49db1bf24410359cfe37fe9a4f70a807"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0012192"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0002104"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "2baaca3555df1745d44056e8c01f9d0c"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0012436"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0030423"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "926c80b6c91efb10ca31f2f612e7306e"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0031481"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0002910"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "dae217f92a40edffdf6f2530edf304da"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0007669"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0002910"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "cf9d42906200ace658ad0530fad03a21"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0011073"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001525"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "62ae1ea3c3063a00794e043716d32a3d"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0030088"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001290"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "b71440ac4c2a88cf203a830d06c024d6"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0010581"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0000737"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "5e86025b5bd78576cb8b18ffa6d5867a"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0007451"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0000737"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "999ec77bf768dc94964f303123766307"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0007669"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0100611"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "8988557302a7ee012dd836a96a431667"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0010581"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0003228"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "a0dbf352923bfeeb102c3134f5ba99be"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0007451"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0003228"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "67e1312db439280b4d0362e1f988cce8"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0010785"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0002317"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "2dae6510fcb0d3a4b174fcfcd01211eb"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0030088"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001324"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "f8acd3df866c2d91cd76f507bac0d5c2"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0031481"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0010804"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "6e2e69955e4f53b98ad9974154d32d47"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0010802"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0011682"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "881622e672a74efd63c2e6a87ca3d7aa"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0031481"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0002205"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "9e177fdaa34d54821e00c748a297ca67"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0012436"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001737"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "0767c97e995b7f74adb124c44518b6dc"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0007450"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001939"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "ccc2fb079b82e04d1c8bc47aaa0b3bce"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0031481"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001263"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "46bd37875dea004a4b5ee89fbf7eda63"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0010802"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001263"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "f054829332046c1512d43d45224e698a"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0012436"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001263"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "0e04b0a85646bd8427439bc731e1b889"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0030087"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001263"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "9abdec98c57fed4957b3a4131f8cdc9e"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0010581"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0002013"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "0631daecf88fb566b24cefa3c80ce4e1"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0007451"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0002013"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "08c8e428e707bff409415ef179c1dfd0"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0010581"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001955"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "ccd5796368067d97ff198e0f1f369060"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0007451"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001955"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "7e79d0e5fa071d0ce1111b7de9489bcf"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0008242"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0000666"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "abf07362caab44c660ff2498787024bc"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0008843"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001317"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "a312fb4cf3e1b68855d782559eb34f64"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0012192"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0010557"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "7adc20e575f4e20398f5c4be59addf5d"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0012436"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001744"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "5d892bfa6049851a075b470fb4f4956f"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0014523"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001284"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "67f181c231b083e72355944d966ae750"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0012192"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001387"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "bafa0d913c2dc7e78cd98d05278a6973"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0014523"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0007366"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "9b93e8f93a142bf4a1f8d92e156790b0"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0005147"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0006476"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "57fb1643165252f168bf71e0e9ac22b8"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0010802"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0004415"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "87b0d725d20d76bfbbfffa9c2f8be4b7"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0030087"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0002714"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "0bf145c14adcd3130d48b4f9293355f1"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0012192"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0012642"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "8be3174a3ff57ae044779870894c3330"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0012192"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0002594"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "a6a5ebd58acc195443ed95d4f9386d75"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0007669"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0002594"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "d333d2d06625df3c0404ea5ac45a4ce8"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0010802"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0002594"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "d6660e7d11d03c67a3e110f66133aa21"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0012436"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0002594"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "f122ff46206a7f79354f2d3e0d32a91c"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0031481"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0000341"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "da6682ccb2e67223112d9dd8dd98eb65"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0007450"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0000445"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "fac9e02e721d9e31f118b1f35accce7d"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0007669"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0000078"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "d74b1d1b6bd370c12549a2f930a6956f"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0005148"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0000855"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "14bf69af2cb4682c1c37d51834b74705"
            },
            {
              "id": "7626eb4804520ad1c5aaeb354bd864d8"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0031481"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0002079"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "653ec6f99255f973840d587aa6dd8563"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0010813"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001438"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "0036bfff38f786ebddb266159c2b1edc"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0012192"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0000768"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "ba4068283772d8fde2e760728714093f"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0010581"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0004322"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "45c597e9d010374ec3ac93799ea2e1de"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0014458"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0004322"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "f961b4c1c05e1416c1328ef65fc2e7e1"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0007451"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0004322"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "789e2535768fd466c10f956d723ef12f"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0014523"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0004322"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "3d5e20be86d6021f2988927f41c4be2b"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0030088"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001270"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "ef2867ef703d0ad73742927b4a564da6"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0031481"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0002187"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "f4a0a4dc7f90e9afeae9fd44aeea8813"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0010802"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0000023"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "61cfbb6d86bf7d0122d9d2fcee23a411"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0008242"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0000751"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "e7ddd58d14c851598cc779945fa77e33"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0031481"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0012594"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "d464a8c34f227a63ec9a37cd31ca651c"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0010785"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001133"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "9d3c17bdb3713aab9cd67e2f45d96176"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0005148"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0031819"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "3f6c2588926d6c0e23d75b5021307743"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0031481"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0012448"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "3c462531445aa81fe021a2c590ce9ac4"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0007669"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0003076"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "74f07d5037ce7603285936fd86f11b2e"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0010802"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0003076"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "ff772aa170d50ae55eeeb66555664e40"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0014458"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0003076"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "8dcb4c7c1c3b31a176ec878fee9eb94d"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0030088"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0003076"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "1fb76ab0a55f83d57654045b03d53f06"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0030087"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001993"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "c6ce04b4b9b122d86d8ff5410b435afc"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0008843"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0007201"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "52e9a61ea56e403103e735f9c16dcc36"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0014458"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001520"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "d8977920db81cfc6e2c29a9f8973d465"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0013242"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0025502"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "51aa26e290a3c81c2479208c39314618"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0014523"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0100543"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "c6232ceb9be65554473af8260efd3699"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0012192"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0003758"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "8391820146a59b64f3533d7a6cb30b98"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0031481"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001319"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "c0d12db45c4ca4267a2b9d88956fbb3c"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0031481"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0009879"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "202a1bae3c4aa2c86636cabcf1606347"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0012436"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0000260"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "c0f06eccb9f8c247585f029474f343a6"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0014523"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0002059"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "0d72ffe450070fcf8bebff7ba05b4199"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0012192"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0000369"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "c7e1fe4608bc4c2ffa969e5409a7cc08"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0012436"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0000369"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "496c4694ae07abe6a9ae59c91c6361d1"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0031481"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0000952"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "1a567cc1be2aeaf95aaf03ac75902cdf"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0012436"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0002944"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "9c8bece27098200104252d8a91215be5"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0010785"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0000580"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "b290d04d5890e23c33ff7771026ea761"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0007669"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0000077"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "3e38e4f2b9bf92804d162f8aa70a7f10"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0010581"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0008872"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "6a9c3c11cbd6b781ed8733cd2d53bada"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0007451"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0008872"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "69903964173648faa2374e21b687e3b5"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0010785"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001751"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "237cfdcec30985416bcc16063df6667e"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0030088"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0002305"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "ec484a1a1158bebb1c383e5d33788666"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0014458"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0003537"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "31cce92f4d3ab4a443292a3ec8ef19be"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0010802"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0011573"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "e1eac0947d7eceeb92ee794e3bc097da"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0010802"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0000073"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "c708e35c5250dca846445e10a962b916"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0012436"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0004442"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "2470307de035f6887e6d2f200e66c26a"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0031481"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0008936"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "48f53cea7b3c1830d102b6e9dcb55c41"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0012348"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0012092"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "792f792d97b6a8fb941ac721c7dca621"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0030088"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0011182"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "dcf0035f916bb4854956f87d9e99abbf"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0015790"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001948"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "1d99610b8f7245c14fb561f7138cd1d6"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0010813"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0000857"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "bc0676d58f47d10d35365d3a56888820"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0012436"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001395"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "9994fcc17beadb172f5a9f8c98b3f6af"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0030087"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0002069"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "9cf290a01ef2c4d80fb8761f226ceb66"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0012436"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0000219"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "29b7293adb191bfb28375b3909d619aa"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0031481"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0002521"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "411049c99a5d225c6b804c5b6cde8cdc"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0030087"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0002521"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "365800f2145da658edb90b27bcfc7662"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0008242"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0000408"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "8244677a623518adc30e5c1deeea7bf6"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0007669"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0002149"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "466ac1a4184497fd6eca54a73fa8710e"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0014458"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0002240"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "04684185427174ae615e45c429184eb5"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0012436"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0002240"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "c44a5a176a668d2ead40c083e677901c"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0012192"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001508"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "e50100eaf8e4171c799a03167a965e93"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0010802"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001508"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "eba8e4019b6c6dd290f29a1f299e243e"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0010581"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001508"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "6febb513f14146b633662e6b9d4ce9f9"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0007451"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001508"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "33355b42f40fd75224022432cf11f866"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0012192"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001265"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "0a5341a2518307a926b3da7a57c752f4"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0031481"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001348"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "4cb0f3799ee4c26768cbddc695b151cb"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0008242"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001327"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "a4fac8947539a07bce6d882b6f21ca91"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0008843"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001327"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "08cb91b5ce5fd16715f04c88dfa02f7c"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0010581"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001986"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "63f154fe033b6b4ca7d50b26cc057951"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0007451"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001986"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "7beeb6a1d9af33ede22efb9876d26549"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0010802"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001195"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "68b4ed8795c61c185124d2da5dfe0131"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0010802"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0031369"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "614ea6dd7e6e8449019f60cd554f2bb8"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0007669"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0030997"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "38650e4a07ca7c7ba6c3e6bbe6d4cd86"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0012436"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0002719"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "fe8ff28949c0e790a3b5a7d4bda7438f"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0014458"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0003109"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "b7fb21983e694ef74d22bc08b33f2aec"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0031481"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0000046"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "11a567452a1fc1ef869090285d1089b7"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0008242"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0002446"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "1974a9fbfd29a28de60f4483fc65c2b1"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0007452"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0031284"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "987c54d297c5572d9bd174627bd071eb"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0031481"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0000463"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "44345e96cbacacf247e7abfce845f454"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0010581"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0000103"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "1f3d6f020e9abcfd3c200a4095486f5b"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0015790"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0000103"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "79dc27cb79f39a874dce6a434d16073e"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0007451"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0000103"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "7f8e3b0ecb6890a0906a7087d2c87366"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0014523"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0003487"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "10004cc14f75612d8347234d2c2bfcc3"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0030087"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0005487"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "1c625932ea9e61579629e46cec60188f"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0008242"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0005102"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "ce97d32c3fb169a55c535e75df615425"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0012192"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0000444"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "38723240083a68736363a0dca06a0d47"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0007669"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0004379"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "7e5d1946a4f89035a79c9ecce0992f04"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0012192"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0000331"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "d9e3c3071c84196249d15fcbc8e63ed5"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0011073"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001944"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "2d9d107968a4c383c599495dd5a83878"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0007669"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0005563"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "e02e15acd4514e43ea1d2d7863dda89c"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0031481"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0000293"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "99fd613e2cc70f7aed5956ab69016463"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0007669"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0012210"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "6f3b338acd68d48e1070971722084eed"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0030089"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001518"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "fb01d23a8c8c706d2c26497226076e3a"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0100165"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001518"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "5b9b0ba1b87b10530b6ad46ac91c346c"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0030088"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0001518"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "1bf5a981012915959dfd8fce76bed8b7"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0007450"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0002171"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "c03488800b5c254fb66ee74a6cea945c"
            }
          ]
        }
      },
      {
        "node_bindings": {
          "disease": [
            {
              "id": "MONDO:0007669"
            }
          ],
          "phenotypic_feature": [
            {
              "id": "HP:0040270"
            }
          ]
        },
        "edge_bindings": {
          "e1_disease_phenotypic_feature": [
            {
              "id": "4b9266f35608dc10c1901e5432f4deaf"
            }
          ]
        }
      }
    ],
    "query_graph": {
      "edges": {
        "e1_disease_phenotypic_feature": {
          "subject": "disease",
          "object": "phenotypic_feature"
        }
      },
      "nodes": {
        "disease": {
          "category": "biolink:Disease",
          "id": [
            "NCIT:C160279",
            "NCIT:C160277",
            "EFO:0000400",
            "MONDO:0005015",
            "NCIT:C2985",
            "NCIT:C159026",
            "NCIT:C47836",
            "http://purl.obolibrary.org/obo/MAXO_0001115",
            "HP:0005978",
            "HP:0100651",
            "HP:0009800",
            "EFO:0004593",
            "HP:0004904",
            "NCIT:C91449",
            "HP:0000831",
            "HP:0000877",
            "MONDO:0018911",
            "NCIT:C114769",
            "NCIT:C129739",
            "MONDO:0000065",
            "HP:0000863",
            "EFO:0001360",
            "MONDO:0005148",
            "NCIT:C26747",
            "NCIT:C2986",
            "NCIT:C91490",
            "NCIT:C91529",
            "MONDO:0007450",
            "MONDO:0007669",
            "MONDO:0006920",
            "EFO:1001121",
            "NCIT:C84933",
            "MONDO:0010863",
            "MONDO:0011027",
            "MONDO:0011068",
            "MONDO:0011073",
            "MONDO:0011168",
            "MONDO:0011363",
            "MONDO:0011507",
            "MONDO:0011955",
            "EFO:0001359",
            "MONDO:0005147",
            "MONDO:0005406",
            "MONDO:0007451",
            "EFO:0004596",
            "MONDO:0010581",
            "MONDO:0010582",
            "MONDO:0007452",
            "MONDO:0007454",
            "MONDO:0010255",
            "MONDO:0008023",
            "MONDO:0007453",
            "MONDO:0010894",
            "MONDO:0008843",
            "MONDO:0009432",
            "MONDO:0010861",
            "MONDO:0010862",
            "MONDO:0010864",
            "MONDO:0010950",
            "MONDO:0011016",
            "MONDO:0011033",
            "MONDO:0011123",
            "MONDO:0011167",
            "MONDO:0011302",
            "MONDO:0011572",
            "MONDO:0005827",
            "EFO:0007346",
            "MONDO:0010785",
            "MONDO:0011667",
            "MONDO:0011668",
            "NCIT:C123018",
            "NCIT:C129741",
            "NCIT:C129742",
            "NCIT:C129744",
            "NCIT:C129745",
            "NCIT:C129746",
            "MONDO:0015790",
            "MONDO:0011386",
            "MONDO:0010813",
            "MONDO:0011072",
            "MONDO:0012192",
            "MONDO:0008242",
            "MONDO:0009099",
            "MONDO:0019846",
            "EFO:0004996",
            "EFO:0004997",
            "MONDO:0010802",
            "MONDO:0012963",
            "MONDO:0012480",
            "MONDO:0014674",
            "MONDO:0012921",
            "MONDO:0014523",
            "MONDO:0013242",
            "MONDO:0016391",
            "MONDO:0012348",
            "MONDO:0012522",
            "MONDO:0012919",
            "MONDO:0014488",
            "MONDO:0030087",
            "MONDO:0030088",
            "MONDO:0030089",
            "MONDO:0022993",
            "MONDO:0014458",
            "MONDO:0012962",
            "MONDO:0012971",
            "MONDO:0012961",
            "MONDO:0013078",
            "MONDO:0012966",
            "MONDO:0012422",
            "MONDO:0012920",
            "MONDO:0013240",
            "MONDO:0014589",
            "MONDO:0012513",
            "MONDO:0012818",
            "MONDO:0100164",
            "MONDO:0012969",
            "MONDO:0012970",
            "MONDO:0012436",
            "MONDO:0025690",
            "MONDO:0031481",
            "MONDO:0031010",
            "MONDO:0015886",
            "MONDO:0100165",
            "MONDO:0015887",
            "NCIT:C131848",
            "MONDO:0015122",
            "MONDO:0015967",
            "MONDO:0020525",
            "NCIT:C131846",
            "NCIT:C113407",
            "NCIT:C101857",
            "NCIT:C106381",
            "NCIT:C106382",
            "NCIT:C113717",
            "NCIT:C113463",
            "NCIT:C99532",
            "NCIT:C112844",
            "NCIT:C112845",
            "NCIT:C111913",
            "NCIT:C129637",
            "NCIT:C129736",
            "NCIT:C122685",
            "NCIT:C129735",
            "NCIT:C131845",
            "NCIT:C128671",
            "NCIT:C128709",
            "NCIT:C128753",
            "NCIT:C128756",
            "NCIT:C128754",
            "NCIT:C128755",
            "NCIT:C129743",
            "NCIT:C131836",
            "NCIT:C131847",
            "NCIT:C129760",
            "NCIT:C131859",
            "NCIT:C114852",
            "NCIT:C130996",
            "NCIT:C114902",
            "NCIT:C163027",
            "NCIT:C163028",
            "NCIT:C129747",
            "NCIT:C160278",
            "NCIT:C114899",
            "NCIT:C129748",
            "NCIT:C172606",
            "NCIT:C161704",
            "NCIT:C161709",
            "NCIT:C161712",
            "NCIT:C161713",
            "NCIT:C161723",
            "NCIT:C161724",
            "NCIT:C161731",
            "NCIT:C163816",
            "NCIT:C163874",
            "NCIT:C163878",
            "NCIT:C163879",
            "NCIT:C163886",
            "NCIT:C163817",
            "NCIT:C163872",
            "NCIT:C163906",
            "NCIT:C163911",
            "NCIT:C163913",
            "NCIT:C163920",
            "NCIT:C161313",
            "NCIT:C163390",
            "NCIT:C163391",
            "NCIT:C157813",
            "NCIT:C158738",
            "NCIT:C161655",
            "NCIT:C163929",
            "NCIT:C163930",
            "NCIT:C163931",
            "NCIT:C163935",
            "NCIT:C163936",
            "NCIT:C163937",
            "NCIT:C163401",
            "NCIT:C163814",
            "NCIT:C163840",
            "NCIT:C163841",
            "NCIT:C163842",
            "NCIT:C163843",
            "NCIT:C163844",
            "NCIT:C163845",
            "NCIT:C163846",
            "NCIT:C163847",
            "NCIT:C163848",
            "NCIT:C163849",
            "NCIT:C163850",
            "NCIT:C163851",
            "NCIT:C163852",
            "NCIT:C163853",
            "NCIT:C163854",
            "NCIT:C163855",
            "NCIT:C163856",
            "NCIT:C163857",
            "NCIT:C163858",
            "NCIT:C163859",
            "NCIT:C177763",
            "NCIT:C20835",
            "NCIT:C177938",
            "NCIT:C179441",
            "NCIT:C179448",
            "NCIT:C19756",
            "NCIT:C34942",
            "NCIT:C43263",
            "NCIT:C34537",
            "NCIT:C84433",
            "NCIT:C84415",
            "NCIT:C84919",
            "NCIT:C99248",
            "EFO:0009706",
            "NCIT:C99994",
            "EFO:1001503",
            "EFO:1001511",
            "EFO:0010164",
            "EFO:0009756",
            "EFO:0009757",
            "OMIA:000277",
            "MONDO:0016383",
            "OMIA:000029",
            "OMIA:000279",
            "OMIA:000278",
            "OMIA:000277-9598",
            "OMIA:000277-9615",
            "MONDO:0004782"
          ]
        },
        "phenotypic_feature": {
          "category": "biolink:PhenotypicFeature"
        }
      }
    }
  }
};