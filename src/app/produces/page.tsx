import { redirect } from "next/navigation";

export default function ProducesRedirectPage(): never {
  redirect("/en/products");
}
