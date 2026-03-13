import AddProduct from '@/components/AddProduct.vue'
import EditProduct from '@/components/EditProduct.vue'
import {defineStore} from 'pinia'
import { ref,computed } from 'vue'
export const useCounterStore = defineStore('Counter',()=>{
    //state in pinia define  
    const count = ref(0)
    const name =  ref('Hello')

    const  doubleCouter = computed(() => count.value*2)
    function increment(){
        this.count++
    }
    
    return { count,name,doubleCouter,increment }
    })
    // export const useFromDataStore = defineStore('FromData',()=>{
    //     const name = ref('')
    //     const ItemId=ref(null)
    //     const state = ref('')
    // })
    export const useProductStore = defineStore('productStore',{
        state:()=>({
            products:[],
        }),
        // const 
        actions:{
            AddProductt(products){
                console.log(products);
                this.products.push(products)
                this.saveProductsToLocalstores();
            },
             saveProductsToLocalstores(){
                const storedProducts = localStorage.getItem('products');
                if(storedProducts){
                    this.products= JSON.parse(storedProducts);
                }
             },
             saveProductsToLocalstores(){
                console.log(this.products);
                localStorage.setItem('products',JSON.stringify(this.products))
             }
        }
    })
    // export const useEditProductStore = defineStore('EditProduct',()=>{
    //     const newproducts = [];
    //     // function  EditProduct(NewData){


    //     // }
    // })
    // export const useFromData3Store = defineStore('fromdata',()=>{
    // const form = ref([]);
    // }) 