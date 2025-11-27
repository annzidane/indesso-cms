import type { Schema, Struct } from '@strapi/strapi';

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

export interface HomePageAboutUsSection extends Struct.ComponentSchema {
  collectionName: 'components_home_page_about_us_sections';
  info: {
    displayName: 'about_us_section';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images'>;
    button: Schema.Attribute.Component<'shared.button', false>;
    card: Schema.Attribute.Component<'shared.card', false>;
    feature: Schema.Attribute.Component<'shared.feature', false>;
    title: Schema.Attribute.String;
  };
}

export interface HomePageBusinessCard extends Struct.ComponentSchema {
  collectionName: 'components_home_page_business_cards';
  info: {
    displayName: 'business_card';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    feature: Schema.Attribute.Component<'shared.feature', false>;
    ingredient_image: Schema.Attribute.Media<'images'>;
  };
}

export interface HomePageBusinessSection extends Struct.ComponentSchema {
  collectionName: 'components_home_page_business_sections';
  info: {
    displayName: 'business_section';
  };
  attributes: {
    card: Schema.Attribute.Component<'home-page.business-card', true>;
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
    hero_badge: Schema.Attribute.Component<'shared.badge', false>;
    title: Schema.Attribute.String;
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
    image: Schema.Attribute.Media<'images' | 'files'>;
    text_employee: Schema.Attribute.Text;
    text_people: Schema.Attribute.Text;
    title_employee: Schema.Attribute.String;
    title_people: Schema.Attribute.String;
    total_employee: Schema.Attribute.String;
    total_people: Schema.Attribute.String;
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

export interface SharedBackground extends Struct.ComponentSchema {
  collectionName: 'components_shared_backgrounds';
  info: {
    displayName: 'background';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
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
    displayName: 'card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    number: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface SharedDescription extends Struct.ComponentSchema {
  collectionName: 'components_shared_descriptions';
  info: {
    displayName: 'description';
  };
  attributes: {
    description: Schema.Attribute.Text;
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
    displayName: 'feature';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.Blocks;
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

export interface SharedLogo extends Struct.ComponentSchema {
  collectionName: 'components_shared_logos';
  info: {
    displayName: 'logo';
    icon: 'crown';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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

export interface SharedPath extends Struct.ComponentSchema {
  collectionName: 'components_shared_paths';
  info: {
    displayName: 'path';
  };
  attributes: {
    path: Schema.Attribute.String;
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

export interface SharedSlug extends Struct.ComponentSchema {
  collectionName: 'components_shared_slugs';
  info: {
    displayName: 'slug';
  };
  attributes: {
    slug: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface SharedTitle extends Struct.ComponentSchema {
  collectionName: 'components_shared_titles';
  info: {
    displayName: 'title';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'footer.footer-menu': FooterFooterMenu;
      'home-page.about-us-section': HomePageAboutUsSection;
      'home-page.business-card': HomePageBusinessCard;
      'home-page.business-section': HomePageBusinessSection;
      'home-page.hero-section': HomePageHeroSection;
      'home-page.impact-card': HomePageImpactCard;
      'home-page.matric-card': HomePageMatricCard;
      'home-page.reason-section': HomePageReasonSection;
      'home-page.stats-card': HomePageStatsCard;
      'shared.background': SharedBackground;
      'shared.badge': SharedBadge;
      'shared.button': SharedButton;
      'shared.card': SharedCard;
      'shared.description': SharedDescription;
      'shared.email': SharedEmail;
      'shared.feature': SharedFeature;
      'shared.keywords': SharedKeywords;
      'shared.lang': SharedLang;
      'shared.logo': SharedLogo;
      'shared.menus': SharedMenus;
      'shared.page-slug': SharedPageSlug;
      'shared.path': SharedPath;
      'shared.phone': SharedPhone;
      'shared.reason-card': SharedReasonCard;
      'shared.seo': SharedSeo;
      'shared.slug': SharedSlug;
      'shared.title': SharedTitle;
      'shared.title-description': SharedTitleDescription;
    }
  }
}
