import { Success } from "@/components/stripe/success";

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const activationId = searchParams.activation_id;

  return <Success activationId={activationId as string}/>
}
