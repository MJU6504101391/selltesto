import { ref } from 'vue';
import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {

  const menu = ref([
    { name: 'เทสโตมันฝรั่งหยักรสปลาสามรส 69กรัม', img: 'https://th.bing.com/th/id/R.37ab88cda9ebe1739cae13e3780ebabf?rik=lj9wmGS6vhIcyA&pid=ImgRaw&r=0', price: 20 },
    { name: 'เทสโตมันฝรั่งทอดกรอบแผ่นเรียบ รสซอลท์แอนด์ซาวร์ 69กรัม ', img: 'https://st.bigc-cs.com/public/media/catalog/product/03/88/8851004416203/8851004416203_1.jpg', price: 20 },
    { name: 'เทสโตแผ่นหยัก มันฝรั่งแท้รสเกลือ 73กรัม ', img: 'https://media.shopat24.com/pdmain/385965-01k-potato-testo.jpg', price: 20 },
    { name: 'เทสโตมันฝรั่งแท้ทอดกรอบชนิดแผ่นเรียบ กลิ่นเอ็กซ์ตร้าโนริสาหร่าย 69กรัม', img: 'https://st.bigc-cs.com/public/media/catalog/product/45/88/8851004499145/8851004499145-_1-20230505111632-.jpg', price: 20 },
    { name: 'เทสโต เดวิล มันฝรั่งทอดกรอบแผ่นหยัก รสชิลลี่ผสมพริกจักรพรรดิ์ 68กรัม ', img: 'https://th.bing.com/th/id/OIP.x9W_RMI5Oh6lSMcjHF_YMAHaHa?pid=ImgDet&rs=1', price: 20 },
    { name: 'เทสโตเดวิลมันฝรั่งแท้ทอดกรอบแผ่นหยักรสบาร์บีคิวแมกซ์สไปซี่ 69กรัม', img: 'https://backend.tops.co.th/media/catalog/product/8/8/8851004418047_e04-06-2020.jpg', price: 20 },
    { name: 'เทสโตมันฝรั่งทอดกรอบแผ่นหยัก กลิ่นปูผัดผงกะหรี่ 69กรัม', img: 'https://st.bigc-cs.com/public/media/catalog/product/44/88/8851004498544/8851004498544_1-20230123105619-.jpg', price: 20 },
    { name: 'เทสโต แผ่นหยัก รสบาร์บีคิว 52กรัม', img: 'https://sentosakhonkaen.com/wp-content/uploads/2021/08/8851004401254.png', price: 20 },
    { name: 'เทสโตมันฝรั่งแท้ทอดกรอบชนิดแผ่นหยัก รสชีสซี่บาร์บีคิว 60กรัม', img: 'https://www.bigc.co.th/_next/image?url=https:%2F%2Fst.bigc-cs.com%2Fpublic%2Fmedia%2Fcatalog%2Fproduct%2F73%2F88%2F8851004499473%2F8851004499473.jpg&w=1200&q=90', price: 20 },
    { name: 'เทสโตมันฝรั่งแท้ทอดกรอบแผ่นเรียบ กลิ่นสาหร่ายแซลมอนย่างเทริยากิ 75กรัม', img: 'https://www.bigc.co.th/_next/image?url=https:%2F%2Fst.bigc-cs.com%2Fpublic%2Fmedia%2Fcatalog%2Fproduct%2F61%2F88%2F8851004499961%2F8851004499961.jpg&w=640&q=90', price: 20 },
  ]);
  
  
  return { menu}
})
export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    cartList: [], 
    orderList:[],
  }),
  actions: {
    addToCart(item) {
      this.cartList.push(item);
    },
    addOrderList() {
      // เพิ่มค่าลงไปใน orderList
      this.orderList.push(...this.cartList);
    
     this.cartList = [];
    },

  },
});
