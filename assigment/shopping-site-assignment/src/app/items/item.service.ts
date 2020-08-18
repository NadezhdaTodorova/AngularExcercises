import { Item } from './item.model';
import { EventEmitter } from '@angular/core';

export class ItemService {

    itemSelected = new EventEmitter<Item>();
    
    private items: Item[] = [
        new Item('Esperanza eyeshadow pallete', '"Lorem ipsum pain sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam, quer nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure pain in reprehenderit in volition velit esse cillum dolore eu fugiat nulla pariatur. Excepteur synt occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "', 
        26, 'https://cdn.shopify.com/s/files/1/0008/4335/0079/products/image_e79e2bab-1ac0-433b-8726-3562691b6221_1024x1024.jpg?v=1570401919',
        'eyeshadow'),
        new Item('Autumn eyeshadow pallete', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit quaspernatur autodit sedia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui painrem ipsum quia pain sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et pain magnam aliquam quaerat min uiam voluptatem. , quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?', 10, 'https://cdn.shopify.com/s/files/1/0008/4335/0079/products/Bossy_Girl_Cosmetics_Autumn_Palette_1024x1024.jpg?v=1570396892',
        'eyeshadow'),
        new Item('Rose Gold 8-Piece Brush Set', 'At vero eos et accusamus et iusto hatred dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos pains et quas annoyances excepturi occati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est labor and harumidem leak. rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est electi optio cumque nihil impede quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis pain repellendus. ',
        25, 'https://cdn.shopify.com/s/files/1/0008/4335/0079/products/RoseGoldBrushSetBossyGirl-2_1024x1024.jpg?v=1589585289',
        'brush'),
        new Item('Caribbean 7-Piece Brush Set', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit quaspernatur autodit sedia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui painrem ipsum quia pain sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et pain magnam aliquam quaerat min uiam voluptatem.',
        21, 'https://cdn.shopify.com/s/files/1/0008/4335/0079/products/Brush_Set01_1024x1024.jpg?v=1570448218', 'brush')

    ];

    getItems() {
        return this.items.slice();
    }
}