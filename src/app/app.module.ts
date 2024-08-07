import { provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AnimatedCodeEditorModule } from '@open-template-hub/animated-code-editor';
import { ButtonModule } from '@open-template-hub/button';
import { CardModule } from '@open-template-hub/card';
import { CountdownModule } from '@open-template-hub/countdown';
import { HeroModule } from '@open-template-hub/hero';
import { LedModule } from '@open-template-hub/led';
// import { ImageCropperModule } from 'ngx-image-cropper';
import { MarkdownModule } from 'ngx-markdown';
import { ToastrModule } from 'ngx-toastr';
// import { SwiperModule } from 'swiper/angular';
import { environment } from '../environments/environment';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppRoutingModule } from './app-routing.module';
import { ActivityCardComponent } from './component/card/activity-card/activity-card.component';
import { ActivityHistoryCardComponent } from './component/card/activity-history-card/activity-history-card.component';
import { AnalyticsEventCardComponent } from './component/card/analytics-event-card/analytics-event-card.component';
import { AssetCardComponent } from './component/card/asset-card/asset-card.component';
import { BlogCardComponent } from './component/card/blog-card/blog-card.component';
import { BlogHolderCardComponent } from './component/card/blog-holder-card/blog-holder-card.component';
import {
  ContactInformationCardComponent
} from './component/card/contact-information-card/contact-information-card.component';
import { DocCardComponent } from './component/card/doc-card/doc-card.component';
import { DocHolderCardComponent } from './component/card/doc-holder-card/doc-holder-cardcomponent';
import { EmployeeCardComponent } from './component/card/employee-card/employee-card.component';
import { FeatureCardComponent } from './component/card/feature-card/feature-card.component';
import { PolicyCardComponent } from './component/card/policy-card/policy-card.component';
import { PresentationCardComponent } from './component/card/presentation-card/presentation-card.component';
import { PricingCardComponent } from './component/card/pricing-card/pricing-card.component';
import { ProfileCardComponent } from './component/card/profile-card/profile-card.component';
import { StatusCardComponent } from './component/card/status-card/status-card.component';
import { TechStackCardComponent } from './component/card/tech-stack-card/tech-stack-card.component';
import { TestimonialCardComponent } from './component/card/testimonial-card/testimonial-card.component';
import {
  StepTimelineCardComponent
} from './component/card/timeline-card/step-timeline-card/step-timeline-card.component';

import { TimelineCardComponent } from './component/card/timeline-card/timeline-card.component';
import { ColorChartComponent } from './component/color-chart/color-chart.component';
import { BoxContentLoaderComponent } from './component/content-loader/box-content-loader/box-content-loader.component';
import { ContentLoaderComponent } from './component/content-loader/content-loader.component';
import {
  ImageContentLoaderComponent
} from './component/content-loader/image-content-loader/image-content-loader.component';
import {
  TextContentLoaderComponent
} from './component/content-loader/text-content-loader/text-content-loader.component';
import { BottomSvgComponent } from './component/design/bottom-svg/bottom-svg.component';
import { TopSvgComponent } from './component/design/top-svg/top-svg.component';
import { ExtLinkComponent } from './component/ext-link/ext-link.component';
import {
  DashboardLayoutBottomNavComponent
} from './component/nav/dashboard/dashboard-layout-bottom-nav/dashboard-layout-bottom-nav.component';
import {
  DashboardLayoutSideNavComponent
} from './component/nav/dashboard/dashboard-layout-side-nav/dashboard-layout-side-nav.component';
import {
  DashboardLayoutTopNavComponent
} from './component/nav/dashboard/dashboard-layout-top-nav/dashboard-layout-top-nav.component';
import { FooterComponent } from './component/nav/footer/footer.component';
import {
  LandingLayoutBottomNavComponent
} from './component/nav/landing/landing-layout-bottom-nav/landing-layout-bottom-nav.component';
import {
  LandingLayoutTopNavComponent
} from './component/nav/landing/landing-layout-top-nav/landing-layout-top-nav.component';
import { CookiePopupComponent } from './component/popup/cookie-popup/cookie-popup.component';
import { PricePlanComponent } from './component/price-plan/price-plan.component';
import { ProductPresentationComponent } from './component/product-represantation/product-presentation.component';
import { RateBarComponent } from './component/rate-bar/rate-bar.component';
import { SearchComponent } from './component/search/search.component';
import { SettingsDropdownMenuComponent } from './component/settings-dropdown-menu/settings-dropdown-menu.component';
import { SideContentComponent } from './component/side-content/side-content.component';
import {
  BusinessPartnerSwiperComponent
} from './component/swiper/business-partner-swiper/business-partner-swiper.component';
import { PresentationSwiperComponent } from './component/swiper/presentation-swiper/presentation-swiper.component';
import { ScreenshotSwiperComponent } from './component/swiper/screenshot-swiper/screenshot-swiper.component';
import { RequestInterceptor } from './interceptor/request/request.interceptor';
import { ResponseInterceptor } from './interceptor/response/response.interceptor';
import { DashboardLayoutComponent } from './page/dashboard-layout/dashboard-layout.component';
import { DashboardPageComponent } from './page/dashboard-layout/dashboard-page/dashboard-page.component';
import { MyProfilePageComponent } from './page/dashboard-layout/my-profile-page/my-profile-page.component';
import { NotificationsPageComponent } from './page/dashboard-layout/notifications-page/notifications-page.component';
import { PremiumPageComponent } from './page/dashboard-layout/premium-page/premium-page.component';
import { AboutUsPageComponent } from './page/landing-layout/about-us-page/about-us-page.component';
import {
  BlogContentPageComponent
} from './page/landing-layout/blog-page/blog-content-page/blog-content-page.component';
import { BlogPageComponent } from './page/landing-layout/blog-page/blog-page.component';
import { BrandingPageComponent } from './page/landing-layout/branding-page/branding-page.component';
import { ContactUsPageComponent } from './page/landing-layout/contact-us-page/contact-us-page.component';
import { CustomersPageComponent } from './page/landing-layout/customers-page/customers-page.component';
import {
  DocsContentPageComponent
} from './page/landing-layout/docs-page/docs-content-page/docs-content-page.component';
import { DocsPageComponent } from './page/landing-layout/docs-page/docs-page.component';
import {
  ForgetPasswordPageComponent
} from './page/landing-layout/form-pages/forget-password-page/forget-password-page.component';
import { LoginPageComponent } from './page/landing-layout/form-pages/login-page/login-page.component';
import {
  ResetPasswordPageComponent
} from './page/landing-layout/form-pages/reset-password-page/reset-password-page.component';
import { SignUpPageComponent } from './page/landing-layout/form-pages/sign-up-page/sign-up-page.component';
import {
  TwoFactorAuthenticationPageComponent
} from './page/landing-layout/form-pages/two-factor-authentication-page/two-factor-authentication-page.component';
import { HomePageComponent } from './page/landing-layout/home-page/home-page.component';
import { LandingLayoutComponent } from './page/landing-layout/landing-layout.component';
import { PartnersPageComponent } from './page/landing-layout/partners-page/partners-page.component';
import {
  CookiePolicyPageComponent
} from './page/landing-layout/policy-pages/cookie-policy-page/cookie-policy-page.component';
import {
  PrivacyPolicyPageComponent
} from './page/landing-layout/policy-pages/privacy-policy-page/privacy-policy-page.component';
import { TermsPageComponent } from './page/landing-layout/policy-pages/terms-page/terms-page.component';
import { PricingPageComponent } from './page/landing-layout/pricing-page/pricing-page.component';
import { ProductPageComponent } from './page/landing-layout/product-page/product-page.component';
import {
  MaintenancePageComponent
} from './page/landing-layout/raw-content-pages/maintenance-page/maintenance-page.component';
import { NotFoundPageComponent } from './page/landing-layout/raw-content-pages/not-found-page/not-found-page.component';
import {
  SignUpSuccessPageComponent
} from './page/landing-layout/raw-content-pages/sign-up-success-page/sign-up-success-page.component';
import {
  VerifyAccountPageComponent
} from './page/landing-layout/raw-content-pages/verify-account-page/verify-account-page.component';
import { SitemapPageComponent } from './page/landing-layout/sitemap-page/sitemap-page.component';
import { StatusPageComponent } from './page/landing-layout/status-page/status-page.component';
import { EditProfilePageComponent } from './page/settings-layout/edit-profile-page/edit-profile-page.component';
// import { EditSecurityComponent } from './page/settings-layout/edit-security/edit-security.component';
import { EditThemePageComponent } from './page/settings-layout/edit-theme-page/edit-theme-page.component';
import { SettingsLayoutComponent } from './page/settings-layout/settings-layout.component';
import { CallbackPageComponent } from './page/splash-layout/callback-page/callback-page.component';
import {
  ExternalRedirectPageComponent
} from './page/splash-layout/external-redirect-page/external-redirect-page.component';
import { SplashLayoutComponent } from './page/splash-layout/splash-layout.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    DashboardPageComponent,
    SignUpPageComponent,
    SignUpSuccessPageComponent,
    VerifyAccountPageComponent,
    LandingLayoutComponent,
    DashboardLayoutComponent,
    ResetPasswordPageComponent,
    ForgetPasswordPageComponent,
    LandingLayoutTopNavComponent,
    DashboardLayoutSideNavComponent,
    LandingLayoutBottomNavComponent,
    FooterComponent,
    SplashLayoutComponent,
    CallbackPageComponent,
    DashboardLayoutTopNavComponent,
    NotFoundPageComponent,
    MaintenancePageComponent,
    CookiePopupComponent,
    CookiePolicyPageComponent,
    PrivacyPolicyPageComponent,
    TermsPageComponent,
    SettingsLayoutComponent,
    SideContentComponent,
    MyProfilePageComponent,
    SearchComponent,
    RateBarComponent,
    EditThemePageComponent,
    PricingPageComponent,
    PricingCardComponent,
    TestimonialCardComponent,
    SettingsDropdownMenuComponent,
    EditThemePageComponent,
    ColorChartComponent,
    // ProductPageComponent,
    ExtLinkComponent,
    ExternalRedirectPageComponent,
    AboutUsPageComponent,
    PricePlanComponent,
    // ContactUsPageComponent,
    StatusPageComponent,
    ProductPresentationComponent,
    EmployeeCardComponent,
    ProductPresentationComponent,
    StatusCardComponent,
    PolicyCardComponent,
    TimelineCardComponent,
    BrandingPageComponent,
    PresentationCardComponent,
    ActivityHistoryCardComponent,
    ContentLoaderComponent,
    ImageContentLoaderComponent,
    TextContentLoaderComponent,
    BoxContentLoaderComponent,
    BusinessPartnerSwiperComponent,
    PresentationSwiperComponent,
    SitemapPageComponent,
    FeatureCardComponent,
    TopSvgComponent,
    CustomersPageComponent,
    AssetCardComponent,
    BlogPageComponent,
    BlogCardComponent,
    DocsPageComponent,
    DocCardComponent,
    PartnersPageComponent,
    BlogHolderCardComponent,
    BlogContentPageComponent,
    ScreenshotSwiperComponent,
    TechStackCardComponent,
    DocHolderCardComponent,
    DocsContentPageComponent,
    StepTimelineCardComponent,
    BottomSvgComponent,
    ActivityCardComponent,
    ProfileCardComponent,
    EditProfilePageComponent,
    DashboardLayoutBottomNavComponent,
    ContactInformationCardComponent,
    // EditSecurityComponent,
    // TwoFactorAuthenticationPageComponent,
    // AnalyticsEventCardComponent,
    PremiumPageComponent,
    NotificationsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    // ImageCropperModule,
    FormsModule,
    BrowserModule,
    // SwiperModule,
    CardModule,
    ButtonModule,
    AnimatedCodeEditorModule,
    LedModule,
    HeroModule,
    CountdownModule,
    ToastrModule.forRoot({ preventDuplicates: true }),
    MarkdownModule.forRoot({ loader: HttpClient }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: ['production', 'staging'].includes(environment.identity),
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerImmediately'
    })

  ],
  // providers: [
  //   provideClientHydration()
  // ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
