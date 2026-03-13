// import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "vuetify/styles";
import { createVuetify } from 'vuetify'
 import * as directives from 'vuetify/directives'
 import * as components from 'vuetify/components'
import "@mdi/font/css/materialdesignicons.css";
import App from './App.vue'
import router from './router'
// import { useRouter } from 'vue-router';
import Component1 from './components/Component1.vue'

import StoreDetails from './components/StoreDetails.vue';
import SettingPayments from './components/SettingPayments.vue';
import SettingCheckout from './components/SettingCheckout.vue';
import SettingShipping from './components/SettingShipping.vue';
import Settinglocation from './components/Settinglocation.vue';
import SettingNotification from './components/SettingNotification.vue';
import AddProduct from './components/AddProduct.vue';
import ResaleItem from './components/addproduct/ResaleItem.vue';
import AboutView from './view/AboutView.vue';
import HomeView from './view/HomeView.vue';
import HelloWorld from './components/HelloWorld.vue';
import RouterList from './components/RouterList.vue';
import LayoutCom from './components/LayoutCom.vue';
import ProductManage from './components/ProductManage.vue';
import Pinia2 from './components/Pinia2.vue';
// import Dependency from './components/Dependency.vue';
import NewSec from './components/NewSec.vue';
import Products from './components/Products.vue';
import validationTest from './components/validationTest.vue';
import EditProduct from './components/EditProduct.vue';
import FirstComp from './components/FirstComp.vue';
import Dependency from './components/Dependency.vue';
import SecondCom from './components/SecondCom.vue';
import ThirdCom from './components/ThirdCom.vue';
import DragColumn from './components/DragColumn.vue';
import DraggableItem from './components/DraggableItem.vue';
import OrdersCom from './components/OrdersCom.vue';
import TimelineCom from './components/TimelineCom.vue';
import EmailCom from './components/EmailCom.vue';
import NotificationCom from './components/NotificationCom.vue';
import AddressCom from './components/AddressCom.vue';
// import { useProductStore } from '@/stores/counter';

// import { RouterLink, RounterView } from 'vue-router'
 const vuetify = createVuetify({
    components,
    directives,
    icons:{
        defaultSet:"mdi",
    }
 });
//  const productStore = useProductStore();
// productStore.loadProductsFromLocalStorage();
 const pinia = createPinia();
//  const router = useRouter();
const app = createApp(App)
app.component("AddressCom",AddressCom)
app.component("NotificationCom",NotificationCom)
app.component("EmailCom",EmailCom),
app.component("TimelineCom",TimelineCom),
app.component("OrdersCom",OrdersCom),
app.component("SecondCom",SecondCom),
app.component("DragColumn",DragColumn),
app.component("DraggableItem",DraggableItem),
app.component("ThirdCom",ThirdCom),
app.component("FirstComp",FirstComp),
app.component("Dependency",Dependency),
app.component("EditProduct",EditProduct),
app.component("HelloWorld",HelloWorld),
app.component("validationTest",validationTest),
app.component("Products",Products),
app.component("NewSec",NewSec),
app.component("Pinia2",Pinia2),
app.component("ProductManage",ProductManage),
app.component("LayoutCom",LayoutCom),
app.component("RouterList",RouterList),
app.component("HomeView",HomeView),
app.component("AboutView",AboutView),
app.component("Component1",Component1),
app.component("StoreDetails",StoreDetails),
app.component("SettingPayments",SettingPayments),
app.component("SettingCheckout",SettingCheckout),
app.component("SettingShipping",SettingShipping),
app.component("Settinglocation",Settinglocation),
app.component("SettingNotification",SettingNotification),
app.component("AddProduct",AddProduct),
app.component("ResaleItem",ResaleItem),

app.use(pinia)
app.use(vuetify)
app.use(router)

app.mount('#app')
