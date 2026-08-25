import type { DefineComponent } from "vue";
import BoldButton from "./components/BoldButton.vue";
import ItalicButton from "./components/ItalicButton.vue";
import UnderlineButton from "./components/UnderlineButton.vue";
import StrikeButton from "./components/StrikeButton.vue";
import BulletListButton from "./components/BulletListButton.vue";
import OrderedListButton from "./components/OrderedListButton.vue";
import HeaderMenu from "./components/HeaderMenu.vue";

const components = [
  {
    name: "bold",
    component: BoldButton,
    type: "basic",
  },
  {
    name: "italic",
    component: ItalicButton,
    type: "basic",
  },
  {
    name: "underline",
    component: UnderlineButton,
    type: "basic",
  },
  {
    name: "strike",
    component: StrikeButton,
    type: "basic",
  },
  {
    name: "bullet-list",
    component: BulletListButton,
    type: "basic",
  },
  {
    name: "ordered-list",
    component: OrderedListButton,
    type: "basic",
  },
  {
    name: "header-menu",
    component: HeaderMenu,
    type: "basic",
  }
];

export interface Component {
  name: string;
  component: DefineComponent;
  type: "basic" | "classic" | "advanced";
}

export default components;
