import type { Schema, Struct } from '@strapi/strapi';

export interface AboutUsBoardSection extends Struct.ComponentSchema {
  collectionName: 'components_about_us_board_sections';
  info: {
    displayName: 'board_section';
  };
  attributes: {
    eyebrow: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    sections: Schema.Attribute.Component<'about-us.member-section', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
    title: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
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
    first_name: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    last_name: Schema.Attribute.String;
    order_number: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
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
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
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
    eyebrow: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    title: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
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
    eyebrow: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
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
    eyebrow: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    tabs: Schema.Attribute.Component<'about-us.scientific-tab', true>;
    title: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface AboutUsScientificTab extends Struct.ComponentSchema {
  collectionName: 'components_about_us_scientific_tabs';
  info: {
    displayName: 'scientific_tab';
  };
  attributes: {
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    left_block_text: Schema.Attribute.Blocks;
    left_block_title: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    main_image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    slug: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface AboutUsStory extends Struct.ComponentSchema {
  collectionName: 'components_about_us_stories';
  info: {
    displayName: 'story';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    text: Schema.Attribute.Blocks & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    title_slider: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface AboutUsStorySection extends Struct.ComponentSchema {
  collectionName: 'components_about_us_story_sections';
  info: {
    displayName: 'story_section';
  };
  attributes: {
    eyebrow: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    stories: Schema.Attribute.Component<'about-us.story', true>;
    title: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface CareerCareerJoinus extends Struct.ComponentSchema {
  collectionName: 'components_career_career_joinuses';
  info: {
    displayName: 'join_us_section';
  };
  attributes: {
    description: Schema.Attribute.String;
    eyebrow: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    join_us_modal: Schema.Attribute.Component<'career.join-us-modal', false>;
    label_visit_button: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    logo_visit_button: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    opportunities_button: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    url_visit_button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
  };
}

export interface CareerGrowingTogether extends Struct.ComponentSchema {
  collectionName: 'components_career_growing_togethers';
  info: {
    displayName: 'growing_together_section';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    eyebrow: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    growing_together_slide: Schema.Attribute.Component<
      'career.growing-together-slide',
      true
    >;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
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
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
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

export interface CareerJoinUsModal extends Struct.ComponentSchema {
  collectionName: 'components_career_join_us_modals';
  info: {
    displayName: 'join_us_modal';
  };
  attributes: {
    field_address: Schema.Attribute.Component<'shared.field-name', false>;
    field_contact: Schema.Attribute.Component<'shared.field-name', false>;
    field_email: Schema.Attribute.Component<'shared.field-name', false>;
    field_file: Schema.Attribute.Component<'shared.field-file', false>;
    field_name: Schema.Attribute.Component<'shared.field-name', false>;
    field_position: Schema.Attribute.Component<'shared.field-name', false>;
    submit_button: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
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
    eyebrow: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface CareerOption extends Struct.ComponentSchema {
  collectionName: 'components_career_options';
  info: {
    displayName: 'option';
  };
  attributes: {
    option: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface CareerTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_career_testimonials';
  info: {
    displayName: 'testimonial_section';
  };
  attributes: {
    eyebrow: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    testimonials: Schema.Attribute.Relation<
      'oneToMany',
      'api::testimonial.testimonial'
    >;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface CareerTestimonialData extends Struct.ComponentSchema {
  collectionName: 'components_career_testimonial_data';
  info: {
    displayName: 'testimonial_data';
  };
  attributes: {};
}

export interface ContactUsContactUsPage extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_contact_us_pages';
  info: {
    displayName: 'contact_us_page';
  };
  attributes: {
    contact_us_section: Schema.Attribute.Component<'shared.contact-us', false>;
    our_location_section: Schema.Attribute.Component<
      'contact-us.our-location-section',
      false
    >;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface ContactUsContactUsSection extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_contact_us_sections';
  info: {
    displayName: 'contact_us_section';
  };
  attributes: {
    contact_us_section: Schema.Attribute.Component<'shared.contact-us', false>;
  };
}

export interface ContactUsCountryTab extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_country_tabs';
  info: {
    displayName: 'country_tab';
  };
  attributes: {
    location_card: Schema.Attribute.Component<'contact-us.location-card', true>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface ContactUsLocationCard extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_location_cards';
  info: {
    displayName: 'location_card';
  };
  attributes: {
    address: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    city_name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    location_label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    office_type: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    phone_label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    phone_number: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
  };
}

export interface ContactUsOurLocationSection extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_our_location_sections';
  info: {
    displayName: 'our_location_section';
  };
  attributes: {
    country_tab: Schema.Attribute.Component<'contact-us.country-tab', true>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface ContactUsRulesCard extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_rules_cards';
  info: {
    displayName: 'rules_card';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    rules: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface ContactUsVisitorCenterPage extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_visitor_center_pages';
  info: {
    displayName: 'visitor_center_page';
  };
  attributes: {
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    visitor_center_section: Schema.Attribute.Component<
      'contact-us.visitor-center-section',
      false
    >;
    visitor_form_section: Schema.Attribute.Component<
      'contact-us.visitor-form-section',
      false
    >;
  };
}

export interface ContactUsVisitorCenterSection extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_visitor_center_sections';
  info: {
    displayName: 'visitor_center_section';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    eyebrow: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface ContactUsVisitorFormSection extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_visitor_form_sections';
  info: {
    displayName: 'visitor_form_section';
  };
  attributes: {
    button: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    field_date: Schema.Attribute.Component<'shared.field-name', false>;
    field_institution: Schema.Attribute.Component<'shared.field-name', false>;
    field_name: Schema.Attribute.Component<'shared.field-name', false>;
    field_time: Schema.Attribute.Component<'shared.field-name', false>;
    field_visitor: Schema.Attribute.Component<'shared.field-name', false>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    rules_card: Schema.Attribute.Component<'contact-us.rules-card', true>;
    terms_agreement: Schema.Attribute.Blocks & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface FooterFooterMenu extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_menus';
  info: {
    displayName: 'footer_menu';
  };
  attributes: {
    menus: Schema.Attribute.Component<'shared.menus', true>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface HeaderMenuDetail extends Struct.ComponentSchema {
  collectionName: 'components_header_menu_details';
  info: {
    displayName: 'menu_detail';
  };
  attributes: {
    button: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    description: Schema.Attribute.Text;
    slug: Schema.Attribute.String;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface HeaderMenuHeader extends Struct.ComponentSchema {
  collectionName: 'components_header_menu_headers';
  info: {
    displayName: 'menu_header';
  };
  attributes: {
    button: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    menu_detail: Schema.Attribute.Component<'header.menu-detail', true>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
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
    main_title: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface HomePageBusinessCard extends Struct.ComponentSchema {
  collectionName: 'components_home_page_business_cards';
  info: {
    displayName: 'business_card';
  };
  attributes: {
    card_image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    ingredient_image: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    title_button: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface HomePageBusinessSection extends Struct.ComponentSchema {
  collectionName: 'components_home_page_business_sections';
  info: {
    displayName: 'business_section';
  };
  attributes: {
    business_card: Schema.Attribute.Component<'home-page.business-card', true>;
    main_title: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
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
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    title_badge: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface HomePageImpactCard extends Struct.ComponentSchema {
  collectionName: 'components_home_page_impact_cards';
  info: {
    displayName: 'impact_card';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    number: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 100;
        },
        number
      >;
    opener: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface HomePageMatricCard extends Struct.ComponentSchema {
  collectionName: 'components_home_page_matric_cards';
  info: {
    displayName: 'matric_card';
  };
  attributes: {
    description_employee: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    description_people: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title_employee: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    title_people: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
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
    main_title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    matric_card: Schema.Attribute.Component<'home-page.matric-card', false>;
    statistic_card: Schema.Attribute.Component<'home-page.stats-card', true>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface HomePageStatsCard extends Struct.ComponentSchema {
  collectionName: 'components_home_page_stats_cards';
  info: {
    displayName: 'stats_card';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface MediaMediaDetail extends Struct.ComponentSchema {
  collectionName: 'components_media_media_details';
  info: {
    displayName: 'media_detail';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    button: Schema.Attribute.Component<'shared.button', false>;
    social_media: Schema.Attribute.Component<'media.social-media', true>;
    title_explore: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    title_socmed: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
  };
}

export interface MediaMediaInsight extends Struct.ComponentSchema {
  collectionName: 'components_media_media_insights';
  info: {
    displayName: 'media_insight';
  };
  attributes: {
    lable_button: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    title_filter: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface MediaMediaPage extends Struct.ComponentSchema {
  collectionName: 'components_media_media_pages';
  info: {
    displayName: 'media_page';
  };
  attributes: {
    article_grid_title: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    button_label: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
  };
}

export interface MediaSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_media_social_medias';
  info: {
    displayName: 'social_media';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    url: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface OurBusinessBotanicalSourceSection
  extends Struct.ComponentSchema {
  collectionName: 'components_our_business_botanical_source_sections';
  info: {
    displayName: 'botanical_source_section';
  };
  attributes: {
    eyebrow: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
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
    eyebrow: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
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
    eyebrow: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    slidder: Schema.Attribute.Component<'our-business.slidder-card', true>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface OurBusinessCertification extends Struct.ComponentSchema {
  collectionName: 'components_our_business_certifications';
  info: {
    displayName: 'certification';
  };
  attributes: {
    certificate: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 64;
      }>;
  };
}

export interface OurBusinessContactUsSection extends Struct.ComponentSchema {
  collectionName: 'components_our_business_contact_us_sections';
  info: {
    displayName: 'contact_us_section';
  };
  attributes: {
    contact_us_section: Schema.Attribute.Component<'shared.contact-us', false>;
  };
}

export interface OurBusinessFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_our_business_faq_sections';
  info: {
    displayName: 'faq_section';
  };
  attributes: {
    eyebrow: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface OurBusinessGeneralInformation extends Struct.ComponentSchema {
  collectionName: 'components_our_business_general_informations';
  info: {
    displayName: 'general_information';
  };
  attributes: {
    cas_number: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 64;
      }>;
    certification: Schema.Attribute.Component<
      'our-business.certification',
      true
    >;
    ec_number: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 64;
      }>;
    fema_number: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 64;
      }>;
    inci_name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 64;
      }>;
    moq: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 64;
      }>;
    packaging_size: Schema.Attribute.Component<'shared.title', true>;
    shelf_life: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 64;
      }>;
  };
}

export interface OurBusinessGeneralInformationTitle
  extends Struct.ComponentSchema {
  collectionName: 'components_our_business_general_information_titles';
  info: {
    displayName: 'general_information_title';
  };
  attributes: {
    cas_label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    certification_label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    ec_label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    fema_label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    inci_label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    moq_label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    packaging_label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    shelf_life_label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface OurBusinessHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_our_business_hero_sections';
  info: {
    displayName: 'hero_section';
  };
  attributes: {
    hero_section: Schema.Attribute.Component<'shared.hero', false>;
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
    feature_title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface OurBusinessListProductSection extends Struct.ComponentSchema {
  collectionName: 'components_our_business_list_product_sections';
  info: {
    displayName: 'list_product_section';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    title: Schema.Attribute.String;
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
    background_image: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    button: Schema.Attribute.Component<'shared.button', false>;
    eyebrow: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface OurBusinessProductDetailSection
  extends Struct.ComponentSchema {
  collectionName: 'components_our_business_product_detail_sections';
  info: {
    displayName: 'product_detail_section';
  };
  attributes: {
    description_application: Schema.Attribute.Text;
    general_information_label: Schema.Attribute.Component<
      'our-business.general-information-title',
      false
    >;
    title_accordion: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    title_application: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    title_botanical: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    title_format: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    title_organoleptic: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface OurBusinessSlidderCard extends Struct.ComponentSchema {
  collectionName: 'components_our_business_slidder_cards';
  info: {
    displayName: 'slidder_card';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    hot_spot: Schema.Attribute.Component<'our-business.hot-spot', false>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    partner_logo: Schema.Attribute.Media<'images' | 'files'>;
    Subsidiary_text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
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
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
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
    path: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'stats_card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    number: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 100;
        },
        number
      >;
    title: Schema.Attribute.String;
  };
}

export interface SharedContactUs extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_uses';
  info: {
    displayName: 'contact_us';
  };
  attributes: {
    button: Schema.Attribute.String & Schema.Attribute.Required;
    eyebrow: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    field_company_name: Schema.Attribute.Component<'shared.field-name', false>;
    field_email: Schema.Attribute.Component<'shared.field-name', false>;
    field_name: Schema.Attribute.Component<'shared.field-name', false>;
    field_note: Schema.Attribute.Component<'shared.field-name', false>;
    field_topic: Schema.Attribute.Component<'shared.field-dropdown', false>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface SharedEmail extends Struct.ComponentSchema {
  collectionName: 'components_shared_emails';
  info: {
    displayName: 'email';
  };
  attributes: {
    email: Schema.Attribute.Email &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    email_title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface SharedFeature extends Struct.ComponentSchema {
  collectionName: 'components_shared_features';
  info: {
    displayName: 'image_card';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface SharedFeatureSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_feature_sections';
  info: {
    displayName: 'feature_section';
  };
  attributes: {
    eyebrow: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface SharedFieldDropdown extends Struct.ComponentSchema {
  collectionName: 'components_shared_field_dropdowns';
  info: {
    displayName: 'field_dropdown';
  };
  attributes: {
    option: Schema.Attribute.Component<'career.option', true>;
    placeholder: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface SharedFieldFile extends Struct.ComponentSchema {
  collectionName: 'components_shared_field_files';
  info: {
    displayName: 'field_file';
  };
  attributes: {
    button: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    placeholder: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface SharedFieldName extends Struct.ComponentSchema {
  collectionName: 'components_shared_field_names';
  info: {
    displayName: 'field_name';
  };
  attributes: {
    placeholder: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
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
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
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
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    slug: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface SharedPhone extends Struct.ComponentSchema {
  collectionName: 'components_shared_phones';
  info: {
    displayName: 'phone';
  };
  attributes: {
    phone_number: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 15;
      }>;
    phone_title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
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
        maxLength: 100;
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
    size: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 64;
      }>;
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
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
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
    eyebrow: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    title: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
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
    eyebrow: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
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
    eyebrow: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    title: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
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
    eyebrow: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    sub_title: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    title: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    title_report: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
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
      'career.join-us-modal': CareerJoinUsModal;
      'career.life-at-indesso': CareerLifeAtIndesso;
      'career.option': CareerOption;
      'career.testimonial': CareerTestimonial;
      'career.testimonial-data': CareerTestimonialData;
      'contact-us.contact-us-page': ContactUsContactUsPage;
      'contact-us.contact-us-section': ContactUsContactUsSection;
      'contact-us.country-tab': ContactUsCountryTab;
      'contact-us.location-card': ContactUsLocationCard;
      'contact-us.our-location-section': ContactUsOurLocationSection;
      'contact-us.rules-card': ContactUsRulesCard;
      'contact-us.visitor-center-page': ContactUsVisitorCenterPage;
      'contact-us.visitor-center-section': ContactUsVisitorCenterSection;
      'contact-us.visitor-form-section': ContactUsVisitorFormSection;
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
      'media.media-detail': MediaMediaDetail;
      'media.media-insight': MediaMediaInsight;
      'media.media-page': MediaMediaPage;
      'media.social-media': MediaSocialMedia;
      'our-business.botanical-source-section': OurBusinessBotanicalSourceSection;
      'our-business.business-appliance-section': OurBusinessBusinessApplianceSection;
      'our-business.business-summary-section': OurBusinessBusinessSummarySection;
      'our-business.certification': OurBusinessCertification;
      'our-business.contact-us-section': OurBusinessContactUsSection;
      'our-business.faq-section': OurBusinessFaqSection;
      'our-business.general-information': OurBusinessGeneralInformation;
      'our-business.general-information-title': OurBusinessGeneralInformationTitle;
      'our-business.hero-section': OurBusinessHeroSection;
      'our-business.hot-spot': OurBusinessHotSpot;
      'our-business.list-product-section': OurBusinessListProductSection;
      'our-business.main-content': OurBusinessMainContent;
      'our-business.our-catalog-section': OurBusinessOurCatalogSection;
      'our-business.product-detail-section': OurBusinessProductDetailSection;
      'our-business.slidder-card': OurBusinessSlidderCard;
      'our-business.sticky-nav': OurBusinessStickyNav;
      'shared.accordion-item': SharedAccordionItem;
      'shared.badge': SharedBadge;
      'shared.button': SharedButton;
      'shared.card': SharedCard;
      'shared.contact-us': SharedContactUs;
      'shared.email': SharedEmail;
      'shared.feature': SharedFeature;
      'shared.feature-section': SharedFeatureSection;
      'shared.field-dropdown': SharedFieldDropdown;
      'shared.field-file': SharedFieldFile;
      'shared.field-name': SharedFieldName;
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
