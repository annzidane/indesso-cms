import type { Schema, Struct } from '@strapi/strapi';

export interface AboutUsBoardSection extends Struct.ComponentSchema {
  collectionName: 'components_about_us_board_sections';
  info: {
    displayName: 'board_section';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    sections: Schema.Attribute.Component<'about-us.member-section', true>;
    title: Schema.Attribute.Text;
  };
}

export interface AboutUsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_about_us_hero_sections';
  info: {
    displayName: 'hero_section';
  };
  attributes: {
    hero: Schema.Attribute.Component<'shared.hero', false>;
  };
}

export interface AboutUsLeadership extends Struct.ComponentSchema {
  collectionName: 'components_about_us_leaderships';
  info: {
    displayName: 'member_card';
  };
  attributes: {
    first_name: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    last_name: Schema.Attribute.String;
    order_number: Schema.Attribute.Integer & Schema.Attribute.Unique;
    position: Schema.Attribute.Relation<'oneToOne', 'api::position.position'>;
  };
}

export interface AboutUsMemberSection extends Struct.ComponentSchema {
  collectionName: 'components_about_us_member_sections';
  info: {
    displayName: 'member_section';
  };
  attributes: {
    members: Schema.Attribute.Component<'about-us.leadership', true>;
    title: Schema.Attribute.String;
  };
}

export interface AboutUsResearchInnovationSection
  extends Struct.ComponentSchema {
  collectionName: 'components_about_us_research_innovation_sections';
  info: {
    displayName: 'research_innovation_section';
  };
  attributes: {
    card: Schema.Attribute.Component<'shared.feature', true>;
    description: Schema.Attribute.Blocks;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface AboutUsResponsibleOperationsSection
  extends Struct.ComponentSchema {
  collectionName: 'components_about_us_responsible_operations_sections';
  info: {
    displayName: 'responsible_operations_section';
  };
  attributes: {
    accordion_items: Schema.Attribute.Component<'shared.accordion-item', true>;
    background_image: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.Blocks;
    eyebrow: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.Text;
  };
}

export interface AboutUsScientificMasterySection
  extends Struct.ComponentSchema {
  collectionName: 'components_about_us_scientific_mastery_sections';
  info: {
    displayName: 'scientific_mastery_section';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    eyebrow: Schema.Attribute.String;
    tabs: Schema.Attribute.Component<'about-us.scientific-tab', true>;
    title: Schema.Attribute.Text;
  };
}

export interface AboutUsScientificTab extends Struct.ComponentSchema {
  collectionName: 'components_about_us_scientific_tabs';
  info: {
    displayName: 'scientific_tab';
  };
  attributes: {
    label: Schema.Attribute.String;
    left_block_text: Schema.Attribute.Blocks;
    left_block_title: Schema.Attribute.Text;
    main_image: Schema.Attribute.Media<'images'>;
    slug: Schema.Attribute.Text & Schema.Attribute.Unique;
  };
}

export interface AboutUsStory extends Struct.ComponentSchema {
  collectionName: 'components_about_us_stories';
  info: {
    displayName: 'story';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
    title_slider: Schema.Attribute.String;
  };
}

export interface AboutUsStorySection extends Struct.ComponentSchema {
  collectionName: 'components_about_us_story_sections';
  info: {
    displayName: 'story_section';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    stories: Schema.Attribute.Component<'about-us.story', true>;
    title: Schema.Attribute.Text;
  };
}

export interface CareerCareerJoinus extends Struct.ComponentSchema {
  collectionName: 'components_career_career_joinuses';
  info: {
    displayName: 'join_us_section';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    description: Schema.Attribute.String;
    eyebrow: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface CareerGrowingTogether extends Struct.ComponentSchema {
  collectionName: 'components_career_growing_togethers';
  info: {
    displayName: 'growing_together_section';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    eyebrow: Schema.Attribute.String;
    growing_together_slide: Schema.Attribute.Component<
      'career.growing-together-slide',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface CareerGrowingTogetherSlide extends Struct.ComponentSchema {
  collectionName: 'components_career_growing_together_slides';
  info: {
    displayName: 'growing_together_slide';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface CareerHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_career_hero_sections';
  info: {
    displayName: 'hero_section';
  };
  attributes: {
    hero: Schema.Attribute.Component<'shared.hero', false>;
  };
}

export interface CareerLifeAtIndesso extends Struct.ComponentSchema {
  collectionName: 'components_career_life_at_indessos';
  info: {
    displayName: 'life_at_indesso_section';
  };
  attributes: {
    career_showcase: Schema.Attribute.Component<'shared.badge', true>;
    description: Schema.Attribute.Blocks;
    eyebrow: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface CareerTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_career_testimonials';
  info: {
    displayName: 'testimonial_section';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    testimonials: Schema.Attribute.Relation<
      'oneToMany',
      'api::testimonial.testimonial'
    >;
    title: Schema.Attribute.String;
  };
}

export interface CareerTestimonialData extends Struct.ComponentSchema {
  collectionName: 'components_career_testimonial_data';
  info: {
    displayName: 'testimonial_data';
  };
  attributes: {};
}

export interface FooterFooterMenu extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_menus';
  info: {
    displayName: 'footer_menu';
  };
  attributes: {
    menus: Schema.Attribute.Component<'shared.menus', true>;
    path: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HeaderMenuDetail extends Struct.ComponentSchema {
  collectionName: 'components_header_menu_details';
  info: {
    displayName: 'menu_detail';
  };
  attributes: {
    button: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    slug: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HeaderMenuHeader extends Struct.ComponentSchema {
  collectionName: 'components_header_menu_headers';
  info: {
    displayName: 'menu_header';
  };
  attributes: {
    button: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    menu_detail: Schema.Attribute.Component<'header.menu-detail', true>;
    path: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomePageAboutUsSection extends Struct.ComponentSchema {
  collectionName: 'components_home_page_about_us_sections';
  info: {
    displayName: 'about_us_section';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images'>;
    button: Schema.Attribute.Component<'shared.button', false>;
    card: Schema.Attribute.Component<'shared.card', false>;
    feature_image: Schema.Attribute.Media<'images'>;
    main_title: Schema.Attribute.Text;
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface HomePageBusinessCard extends Struct.ComponentSchema {
  collectionName: 'components_home_page_business_cards';
  info: {
    displayName: 'business_card';
  };
  attributes: {
    card_image: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.Text;
    ingredient_image: Schema.Attribute.Media<'images'>;
    path: Schema.Attribute.String;
    title: Schema.Attribute.String;
    title_button: Schema.Attribute.String;
  };
}

export interface HomePageBusinessSection extends Struct.ComponentSchema {
  collectionName: 'components_home_page_business_sections';
  info: {
    displayName: 'business_section';
  };
  attributes: {
    business_card: Schema.Attribute.Component<'home-page.business-card', true>;
    main_title: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomePageHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_home_page_hero_sections';
  info: {
    displayName: 'hero_section';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    description_badge: Schema.Attribute.Text;
    image_badge: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
    title_badge: Schema.Attribute.String;
  };
}

export interface HomePageImpactCard extends Struct.ComponentSchema {
  collectionName: 'components_home_page_impact_cards';
  info: {
    displayName: 'impact_card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    number: Schema.Attribute.Integer;
    opener: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomePageMatricCard extends Struct.ComponentSchema {
  collectionName: 'components_home_page_matric_cards';
  info: {
    displayName: 'matric_card';
  };
  attributes: {
    description_employee: Schema.Attribute.Text;
    description_people: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title_employee: Schema.Attribute.String;
    title_people: Schema.Attribute.String;
  };
}

export interface HomePageReasonSection extends Struct.ComponentSchema {
  collectionName: 'components_home_page_reason_sections';
  info: {
    displayName: 'reason_section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    impact_card: Schema.Attribute.Component<'home-page.impact-card', false>;
    main_title: Schema.Attribute.String;
    matric_card: Schema.Attribute.Component<'home-page.matric-card', false>;
    statistic_card: Schema.Attribute.Component<'home-page.stats-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomePageStatsCard extends Struct.ComponentSchema {
  collectionName: 'components_home_page_stats_cards';
  info: {
    displayName: 'stats_card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface OurBusinessBotanicalSourceSection
  extends Struct.ComponentSchema {
  collectionName: 'components_our_business_botanical_source_sections';
  info: {
    displayName: 'botanical_source_section';
  };
  attributes: {
    eyebrow: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface OurBusinessBusinessApplianceSection
  extends Struct.ComponentSchema {
  collectionName: 'components_our_business_business_appliance_sections';
  info: {
    displayName: 'business_appliance_sections';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface OurBusinessBusinessSummarySection
  extends Struct.ComponentSchema {
  collectionName: 'components_our_business_business_summary_sectio';
  info: {
    displayName: 'business_summary_section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    slidder: Schema.Attribute.Component<'our-business.slidder-card', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface OurBusinessCertification extends Struct.ComponentSchema {
  collectionName: 'components_our_business_certifications';
  info: {
    displayName: 'certification';
  };
  attributes: {
    certificate: Schema.Attribute.String;
  };
}

export interface OurBusinessGeneralInformation extends Struct.ComponentSchema {
  collectionName: 'components_our_business_general_informations';
  info: {
    displayName: 'general_information';
  };
  attributes: {
    cas_number: Schema.Attribute.String;
    certification: Schema.Attribute.Component<
      'our-business.certification',
      true
    >;
    ec_number: Schema.Attribute.String;
    fema_number: Schema.Attribute.String;
    inci_name: Schema.Attribute.String;
    moq: Schema.Attribute.String;
    packaging_size: Schema.Attribute.Component<'shared.title', true>;
    shelf_life: Schema.Attribute.String;
  };
}

export interface OurBusinessHotSpot extends Struct.ComponentSchema {
  collectionName: 'components_our_business_hot_spots';
  info: {
    displayName: 'hot_spot';
  };
  attributes: {
    feature_desc: Schema.Attribute.Text & Schema.Attribute.Required;
    feature_icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    feature_title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface OurBusinessMainContent extends Struct.ComponentSchema {
  collectionName: 'components_our_business_main_contents';
  info: {
    displayName: 'main_content';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface OurBusinessOurCatalogSection extends Struct.ComponentSchema {
  collectionName: 'components_our_business_our_catalog_sections';
  info: {
    displayName: 'our-catalog-section';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    eyebrow: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface OurBusinessSlidderCard extends Struct.ComponentSchema {
  collectionName: 'components_our_business_slidder_cards';
  info: {
    displayName: 'slidder_card';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    hot_spot: Schema.Attribute.Component<'our-business.hot-spot', false>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    partner_logo: Schema.Attribute.Media<'images' | 'files'>;
    Subsidiary_text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface OurBusinessStickyNav extends Struct.ComponentSchema {
  collectionName: 'components_our_business_sticky_navs';
  info: {
    displayName: 'sticky_nav';
  };
  attributes: {
    product_sub_categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::product-sub-category.product-sub-category'
    >;
  };
}

export interface SharedAccordionItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_accordion_items';
  info: {
    displayName: 'accordion_item';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SharedBadge extends Struct.ComponentSchema {
  collectionName: 'components_shared_badges';
  info: {
    displayName: 'badge';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    path: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'stats_card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    number: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface SharedEmail extends Struct.ComponentSchema {
  collectionName: 'components_shared_emails';
  info: {
    displayName: 'email';
  };
  attributes: {
    email: Schema.Attribute.Email;
    email_title: Schema.Attribute.String;
  };
}

export interface SharedFeature extends Struct.ComponentSchema {
  collectionName: 'components_shared_features';
  info: {
    displayName: 'image_card';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SharedFeatureSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_feature_sections';
  info: {
    displayName: 'feature_section';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.Text;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedKeywords extends Struct.ComponentSchema {
  collectionName: 'components_shared_keywords';
  info: {
    displayName: 'keywords';
  };
  attributes: {
    keywords: Schema.Attribute.String;
  };
}

export interface SharedLang extends Struct.ComponentSchema {
  collectionName: 'components_shared_langs';
  info: {
    displayName: 'lang';
  };
  attributes: {
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    value: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface SharedMenus extends Struct.ComponentSchema {
  collectionName: 'components_shared_menus';
  info: {
    displayName: 'menus';
  };
  attributes: {
    path: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedPackagingSize extends Struct.ComponentSchema {
  collectionName: 'components_shared_packaging_sizes';
  info: {
    displayName: 'packaging_size';
  };
  attributes: {};
}

export interface SharedPageSlug extends Struct.ComponentSchema {
  collectionName: 'components_shared_page_slugs';
  info: {
    displayName: 'page_info';
  };
  attributes: {
    path: Schema.Attribute.String;
    slug: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    title: Schema.Attribute.String;
  };
}

export interface SharedPhone extends Struct.ComponentSchema {
  collectionName: 'components_shared_phones';
  info: {
    displayName: 'phone';
  };
  attributes: {
    phone_number: Schema.Attribute.BigInteger &
      Schema.Attribute.SetMinMax<
        {
          max: '013';
          min: '011';
        },
        string
      >;
    phone_title: Schema.Attribute.String;
  };
}

export interface SharedReasonCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_reason_cards';
  info: {
    displayName: 'reason_card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    main_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    keywords: Schema.Attribute.Component<'shared.keywords', true>;
    meta_description: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    meta_title: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SharedStickyNav extends Struct.ComponentSchema {
  collectionName: 'components_shared_sticky_navs';
  info: {
    displayName: 'sticky_nav';
  };
  attributes: {
    slug: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedTitle extends Struct.ComponentSchema {
  collectionName: 'components_shared_titles';
  info: {
    displayName: 'title';
  };
  attributes: {
    size: Schema.Attribute.String;
  };
}

export interface SharedTitleDescription extends Struct.ComponentSchema {
  collectionName: 'components_shared_title_descriptions';
  info: {
    displayName: 'title_description';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SustainabilityAssesstmentsCard extends Struct.ComponentSchema {
  collectionName: 'components_sustainability_assesstments_cards';
  info: {
    displayName: 'assesstments_card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SustainabilityCommitmentSection
  extends Struct.ComponentSchema {
  collectionName: 'components_sustainability_commitment_sections';
  info: {
    displayName: 'commitment_section';
  };
  attributes: {
    assessments_card: Schema.Attribute.Component<
      'sustainability.assesstments-card',
      true
    >;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface SustainabilityHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sustainability_hero_sections';
  info: {
    displayName: 'hero_section';
  };
  attributes: {
    hero: Schema.Attribute.Component<'shared.hero', false>;
  };
}

export interface SustainabilityResponsibleOperationsSection
  extends Struct.ComponentSchema {
  collectionName: 'components_sustainability_responsible_operations_sections';
  info: {
    displayName: 'responsible_operations_section';
  };
  attributes: {
    card_image: Schema.Attribute.Component<'shared.feature', true>;
    description: Schema.Attribute.Blocks;
    eyebrow: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface SustainabilitySustainabilityInitiativeSection
  extends Struct.ComponentSchema {
  collectionName: 'components_sustainability_sustainability_initiative_sections';
  info: {
    displayName: 'sustainability_initiative_section';
  };
  attributes: {
    card_image: Schema.Attribute.Component<'shared.feature', true>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface SustainabilitySustainabilityReportSection
  extends Struct.ComponentSchema {
  collectionName: 'components_sustainability_sustainability_report_sections';
  info: {
    displayName: 'sustainability_report_section';
  };
  attributes: {
    button: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    sub_title: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
    title_report: Schema.Attribute.String;
  };
}

export interface SustainabilitySustainabilityStrategySection
  extends Struct.ComponentSchema {
  collectionName: 'components_sustainability_sustainability_strategy_sections';
  info: {
    displayName: 'sustainability_strategy_section';
  };
  attributes: {
    accordion_items: Schema.Attribute.Component<'shared.accordion-item', true>;
    feature: Schema.Attribute.Component<'shared.feature-section', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-us.board-section': AboutUsBoardSection;
      'about-us.hero-section': AboutUsHeroSection;
      'about-us.leadership': AboutUsLeadership;
      'about-us.member-section': AboutUsMemberSection;
      'about-us.research-innovation-section': AboutUsResearchInnovationSection;
      'about-us.responsible-operations-section': AboutUsResponsibleOperationsSection;
      'about-us.scientific-mastery-section': AboutUsScientificMasterySection;
      'about-us.scientific-tab': AboutUsScientificTab;
      'about-us.story': AboutUsStory;
      'about-us.story-section': AboutUsStorySection;
      'career.career-joinus': CareerCareerJoinus;
      'career.growing-together': CareerGrowingTogether;
      'career.growing-together-slide': CareerGrowingTogetherSlide;
      'career.hero-section': CareerHeroSection;
      'career.life-at-indesso': CareerLifeAtIndesso;
      'career.testimonial': CareerTestimonial;
      'career.testimonial-data': CareerTestimonialData;
      'footer.footer-menu': FooterFooterMenu;
      'header.menu-detail': HeaderMenuDetail;
      'header.menu-header': HeaderMenuHeader;
      'home-page.about-us-section': HomePageAboutUsSection;
      'home-page.business-card': HomePageBusinessCard;
      'home-page.business-section': HomePageBusinessSection;
      'home-page.hero-section': HomePageHeroSection;
      'home-page.impact-card': HomePageImpactCard;
      'home-page.matric-card': HomePageMatricCard;
      'home-page.reason-section': HomePageReasonSection;
      'home-page.stats-card': HomePageStatsCard;
      'our-business.botanical-source-section': OurBusinessBotanicalSourceSection;
      'our-business.business-appliance-section': OurBusinessBusinessApplianceSection;
      'our-business.business-summary-section': OurBusinessBusinessSummarySection;
      'our-business.certification': OurBusinessCertification;
      'our-business.general-information': OurBusinessGeneralInformation;
      'our-business.hot-spot': OurBusinessHotSpot;
      'our-business.main-content': OurBusinessMainContent;
      'our-business.our-catalog-section': OurBusinessOurCatalogSection;
      'our-business.slidder-card': OurBusinessSlidderCard;
      'our-business.sticky-nav': OurBusinessStickyNav;
      'shared.accordion-item': SharedAccordionItem;
      'shared.badge': SharedBadge;
      'shared.button': SharedButton;
      'shared.card': SharedCard;
      'shared.email': SharedEmail;
      'shared.feature': SharedFeature;
      'shared.feature-section': SharedFeatureSection;
      'shared.hero': SharedHero;
      'shared.keywords': SharedKeywords;
      'shared.lang': SharedLang;
      'shared.menus': SharedMenus;
      'shared.packaging-size': SharedPackagingSize;
      'shared.page-slug': SharedPageSlug;
      'shared.phone': SharedPhone;
      'shared.reason-card': SharedReasonCard;
      'shared.seo': SharedSeo;
      'shared.sticky-nav': SharedStickyNav;
      'shared.title': SharedTitle;
      'shared.title-description': SharedTitleDescription;
      'sustainability.assesstments-card': SustainabilityAssesstmentsCard;
      'sustainability.commitment-section': SustainabilityCommitmentSection;
      'sustainability.hero-section': SustainabilityHeroSection;
      'sustainability.responsible-operations-section': SustainabilityResponsibleOperationsSection;
      'sustainability.sustainability-initiative-section': SustainabilitySustainabilityInitiativeSection;
      'sustainability.sustainability-report-section': SustainabilitySustainabilityReportSection;
      'sustainability.sustainability-strategy-section': SustainabilitySustainabilityStrategySection;
    }
  }
}
