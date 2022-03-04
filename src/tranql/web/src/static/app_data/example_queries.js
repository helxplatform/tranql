module.exports = [
    {
      title: 'Protein-Metabolite Interaction',
      query:
`-- What proteins are targetted by the metabolite KEGG:C00017?

set metabolite = "KEGG:C00017"

select metabolite->protein
from "/graph/rtx"
where metabolite=$metabolite

`
  },
  {
    title: 'Chemical substances target genes that target asthma',
    query:
`-- Which chemical substances target genes that target asthma?
select chemical_substance->gene->disease
from "/graph/gamma/quick"
where disease="asthma"
`
  },
  {
    title: 'Usage of predicates to narrow results',
    query:
`-- Which chemical substances decrease activity of genes that contribute to asthma?
select chemical_substance-[decreases_activity_of]->gene-[contributes_to]->disease
from "/graph/gamma/quick"
where disease="asthma"
`
  },
  {
    title: 'Phenotypic Feature-Disease Association',
    query:
`-- What diseases are associated with the phenotypic feature HP:0005978?

select phenotypic_feature->disease
from "/graph/rtx"
where phenotypic_feature="HP:0005978"
`
  },
  {
    title: 'Drug-Disease Pair',
    query:
`--
-- Produce clinial outcome pathways for this drug disease pair.
--

set drug = 'PUBCHEM:2083'
set disease = 'MONDO:0004979'

select chemical_substance->gene->anatomical_entity->phenotypic_feature<-disease
from '/graph/gamma/quick'
where chemical_substance = $drug
and disease = $disease`
  },
  {
    title: 'Drug Targets Gene',
    query:
`--
-- What drug targets some gene?
--

set target_gene = 'HGNC:6871' --mapk1
select chemical_substance->gene
from '/graph/gamma/quick'
where gene = $target_gene`
  },
  {
    title: 'Tissue-Disease Association',
    query:
`--
-- What tissue types are associated with [disease]?
--
set disease = 'asthma'
select disease->anatomical_feature->cell
from '/graph/gamma/quick'
where disease = $disease
`
  },
  {
    title: 'Workflow 5 v3',
    query:
`--
-- Workflow 5
--
--   Modules 1-4: Chemical Exposures by Clinical Clusters
--      For ICEES cohorts, eg, defined by differential population
--      density, which chemicals are associated with these
--      cohorts with a p_value lower than some threshold?
--
--   Modules 5-*: Knowledge Graph Phenotypic Associations
--      For chemicals produced by steps 1-4, what phenotypes are
--      associated with exposure to these chemicals?
--

SELECT population_of_individual_organisms->chemical_substance->gene->biological_process_or_activity<-phenotypic_feature
FROM "/schema"
WHERE icees.table = 'patient'
AND icees.year = 2010
AND icees.cohort_features.AgeStudyStart = '0-2'
AND icees.feature.EstResidentialDensity < 1
AND icees.maximum_p_value = 1
AND chemical_substance !=~ '^(SCTID.*|rxcui.*|CAS.*|SMILES.*|umlscui.*)$'
AND icees.regex = "(MONDO|HP):.*""`
  }
];