import { Component } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'
import { BrandCollectionComponent } from './components/brand-collection/brand-collection.component'
import { TrendingProductsComponent } from './components/trending-products/trending-products.component'
import { ShopFeaturesComponent } from './components/shop-features/shop-features.component'
import { ProductBoxComponent } from './components/product-box/product-box.component'
import { LatestCollectionsComponent } from './components/latest-collections/latest-collections.component'
import { FeaturedCategoryComponent } from './components/featured-category/featured-category.component'

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    HeroComponent,
    BrandCollectionComponent,
    TrendingProductsComponent,
    ShopFeaturesComponent,
    ProductBoxComponent,
    LatestCollectionsComponent,
    FeaturedCategoryComponent,
    LatestCollectionsComponent,
  ],
  templateUrl: './shop.component.html',
  styles: ``,
})
export class ShopComponent {}
