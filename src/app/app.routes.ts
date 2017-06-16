import {RouterModule, Routes} from '@angular/router';

import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RECIPES_ROUTES} from './recipes/recipes.routes';

const APP_ROUTES: Routes = [
    { path: 'recipes', component: RecipesComponent, children: RECIPES_ROUTES },
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: '', redirectTo: '/recipes', pathMatch: 'full' }
];
export const routing = RouterModule.forRoot(APP_ROUTES);