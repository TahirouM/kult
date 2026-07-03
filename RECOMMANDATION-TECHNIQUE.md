# Note de recommandation technique — Site KULT Collection

**Objet :** justifier le choix de la plateforme pour la mise en production du site
e-commerce KULT Collection.
**Contexte :** le site a été développé sur-mesure (Next.js / React) à des fins
pédagogiques. La contrainte impose que le résultat soit **reproductible avec une
solution CMS existante** (Wix, WordPress ou autre) pour une exploitation réelle par
la marque.

---

## 1. Rappel du besoin

KULT Collection est une marque d'artisanat contemporain (bougies, céramiques,
parfums d'intérieur). Le site doit couvrir :

| Besoin | Présent dans la maquette |
|---|---|
| Vitrine de marque (accueil, à propos, storytelling) | ✅ |
| Catalogue produits avec filtres par catégorie | ✅ `/catalogue` |
| Fiches produit (galerie, formats, motifs, quantité, panier) | ✅ `/produit/[slug]` |
| Panier & tunnel de commande | ✅ `/panier` (étapes Livraison/Paiement à finaliser) |
| Espace professionnel B2B (compte, catalogue HT, suivi commandes/livraison) | ✅ `/pro` |
| Gestion autonome du contenu par une équipe non-technique | ⚠️ à adresser par la plateforme |
| Paiement en ligne, stock, expédition | ⚠️ à brancher |

**Profil d'exploitation retenu :** vente en ligne réelle, maintenue au quotidien par
une équipe **non-technique** (gérant / responsable boutique), sans développeur
dédié en interne.

---

## 2. Critères de décision

1. **Adéquation e-commerce** — gestion produits, variantes, stock, commandes.
2. **Paiement & conformité** — moyens de paiement, sécurité (PCI-DSS), TVA, RGPD.
3. **Autonomie de l'équipe** — mise à jour du contenu sans code.
4. **Coût total** — abonnement, thème, extensions, hébergement, maintenance.
5. **Fidélité au design** — capacité à reproduire l'identité (typographies Kaisei
   Decol / Londrina Solid, couleurs, animations, mises en page atypiques).
6. **Évolutivité** — B2B, multilingue, montée en charge, intégrations (CRM, transporteur).
7. **Sécurité & maintenance** — mises à jour, surface d'attaque, sauvegardes.

---

## 3. Comparatif des solutions

### 3.1 Développement sur-mesure (Next.js) — *l'existant pédagogique*

| Points forts | Points faibles |
|---|---|
| Fidélité au design **totale** (pixel-perfect, animations, canvas) | Nécessite un **développeur** pour toute évolution |
| Performances et SEO techniques excellents (SSG/SSR) | Le client ne peut **pas** gérer le contenu seul |
| Aucune limite fonctionnelle (B2B, logique tarifaire dégressive déjà codée) | Paiement, stock, sécurité, back-office **à construire et à maintenir** |
| Pas de coûts de licence | Coût de développement et de maintenance élevé (TJM) |

**Verdict :** idéal en démonstration et pour un besoin très spécifique, mais
**inadapté à une exploitation autonome** par une équipe non-technique. C'est
précisément la raison de la contrainte « reproductible en CMS ».

### 3.2 Wix

| Points forts | Points faibles |
|---|---|
| Éditeur visuel très simple, prise en main immédiate | Personnalisation design **plafonnée** (difficile de reproduire fidèlement) |
| Hébergement, sécurité, sauvegardes inclus | E-commerce correct mais **moins profond** que Shopify |
| Coût d'entrée faible | **B2B faible**, peu d'extensions métier, portabilité des données limitée |

**Verdict :** convient à une vitrine ou une petite boutique, mais **insuffisant**
pour le volet professionnel (comptes pro, tarifs HT dégressifs, suivi de commande).

### 3.3 WordPress + WooCommerce

| Points forts | Points faibles |
|---|---|
| Très flexible, immense écosystème d'extensions | **Maintenance lourde** : mises à jour cœur + thème + plugins |
| Design personnalisable (thème sur-mesure possible) | **Surface de sécurité élevée** (cible d'attaques, plugins tiers) |
| B2B possible via extensions (B2B for WooCommerce…) | Coût réel dispersé (hébergement + plugins premium + maintenance) |
| Bonne maîtrise du contenu éditorial (blog, pages) | Performance à surveiller (empilement de plugins) |

**Verdict :** puissant et flexible, mais la **charge de maintenance et de sécurité**
le rend risqué pour une équipe non-technique sans prestataire régulier.

### 3.4 Shopify — **recommandé**

| Points forts | Points faibles |
|---|---|
| **Spécialisé e-commerce** : produits, variantes, stock, commandes, paiement natifs | Abonnement mensuel + commission (réduite avec Shopify Payments) |
| Back-office **pensé pour des non-techniciens** | Personnalisation profonde = apprendre **Liquid** (thème) |
| Sécurité, PCI-DSS, RGPD, hébergement, sauvegardes **gérés** | Certaines apps tierces payantes |
| **B2B natif** (Shopify B2B : comptes clients, tarifs par groupe, catalogues dédiés) — couvre l'espace pro KULT | Écosystème un peu moins « éditorial » que WordPress |
| Thèmes proches du design, personnalisables ; multilingue (Markets) ; app transporteurs | |
| Time-to-market rapide, montée en charge assurée | |

**Verdict :** meilleur compromis **autonomie / e-commerce / B2B / sécurité** pour KULT.

---

## 4. Tableau de synthèse

| Critère (pondération) | Sur-mesure | Wix | WooCommerce | **Shopify** |
|---|:--:|:--:|:--:|:--:|
| Adéquation e-commerce (20%) | ○ | ● | ●● | **●●●** |
| Paiement & conformité (15%) | ○ | ●● | ●● | **●●●** |
| Autonomie équipe non-tech (20%) | ○ | ●●● | ●● | **●●●** |
| Coût total (15%) | ○ | ●●● | ●● | **●●** |
| Fidélité au design (10%) | ●●● | ● | ●● | **●●** |
| Évolutivité / B2B (10%) | ●●● | ● | ●● | **●●●** |
| Sécurité & maintenance (10%) | ● | ●●● | ● | **●●●** |

`○ = insuffisant · ● = faible · ●● = correct · ●●● = fort`

---

## 5. Recommandation

**Reproduire le site sous Shopify**, pour les raisons suivantes :

1. **C'est d'abord un e-commerce** (catalogue, panier, paiement, commandes) : Shopify
   est conçu exactement pour ça, là où Wix et WooCommerce e-commerce sont des ajouts.
2. **Autonomie de l'équipe** : le back-office permet d'ajouter un produit, changer un
   prix ou publier une page **sans développeur** — condition posée par le contexte
   d'exploitation.
3. **Le volet professionnel (B2B)** de KULT — comptes revendeurs, tarifs HT
   dégressifs, minimum de commande, suivi — est couvert nativement par **Shopify B2B**,
   là où Wix est trop limité et WooCommerce nécessite d'empiler des extensions à
   maintenir.
4. **Sécurité et maintenance externalisées** : paiement PCI-DSS, RGPD, sauvegardes,
   hébergement et mises à jour sont pris en charge par la plateforme — sans expertise
   interne, contrairement à WooCommerce.
5. **Fidélité au design maîtrisée** : un thème personnalisé (Liquid + CSS) reproduit
   l'identité KULT (palette, typographies, mises en page) à un niveau largement
   suffisant, sans repartir de zéro comme en sur-mesure.

**Alternative :** si le besoin se limitait à une **vitrine avec catalogue sans
transaction**, WordPress serait pertinent pour sa richesse éditoriale. Wix ne serait
retenu que pour une **vitrine simple** à très petit budget.

---

## 6. Correspondance maquette → Shopify

Ce qui a été développé se transpose directement :

| Élément développé | Équivalent Shopify |
|---|---|
| Accueil, À propos | Pages + sections de thème (`sections/*.liquid`) |
| `/catalogue` + filtres | Collections + filtres de collection natifs |
| `/produit/[slug]` | Template `product` (variantes = formats/motifs) |
| `/panier` | Panier + checkout Shopify (sécurisé, PCI-DSS) |
| Espace `/pro` (B2B) | **Shopify B2B** : companies, catalogues & prix par groupe |
| Bandeau promo, newsletter | Sections de thème + app e-mail (Shopify Email / Klaviyo) |
| Typographies, couleurs, GIF hero | `settings_schema.json` + CSS du thème + section média |

---

## 7. Prochaines étapes

1. Choisir le plan Shopify (Basic pour démarrer ; **Advanced/Plus** requis pour B2B).
2. Sélectionner un thème proche (ex. *Dawn* / *Studio*) et le personnaliser aux tokens
   KULT (Kaisei Decol, Londrina Solid, rose `#ff5883`, vert `#39b89a`, jaune `#fff45c`).
3. Importer le catalogue (produits, variantes formats/motifs, images).
4. Configurer paiement (Shopify Payments), livraison, TVA.
5. Activer et paramétrer **Shopify B2B** pour l'espace revendeurs.
6. Recette : parcours d'achat grand public + parcours pro, puis mise en ligne.

> La version Next.js de ce dépôt reste la **référence de design et d'expérience** :
> elle sert de cahier des charges visuel et fonctionnel pour l'intégration Shopify.
