import { redirect } from "next/navigation";

export default function ProductsRedirectPage(): never {
  redirect("/en/products");
}
