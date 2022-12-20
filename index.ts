import { of, distinct, from } from 'rxjs';

// ayni degerlerde ikinci emit i almiyor

//  ornek 1
// of(1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 1)
//   .pipe(distinct())
//   .subscribe((val) => console.log(val));

// ornek 2
const obj1 = { id: 3, name: 'name 1' };
const obj2 = { id: 4, name: 'name 2' };
const obj3 = { id: 3, name: 'name 3' };
const vals = [obj1, obj2, obj3];

// diziyi cekmek icin from creation function kullanilir

from(vals)
  .pipe(distinct((e) => e.id))
  .subscribe((val) => console.log(val));
