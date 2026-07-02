import { notFound } from "next/navigation";
import { Suspense } from "react";
import { PortalShell } from "../PortalShell";
import { CatalogTab } from "../tabs/CatalogTab";
import { OrdersTab } from "../tabs/OrdersTab";
import { DeliveryTab } from "../tabs/DeliveryTab";
import { AccountTab } from "../tabs/AccountTab";

const TABS = ["catalogue", "commandes", "livraison", "compte"] as const;
type Tab = (typeof TABS)[number];

export function generateStaticParams() {
  return TABS.map((tab) => ({ tab }));
}

export default async function PortalTabPage({
  params,
}: {
  params: Promise<{ tab: string }>;
}) {
  const { tab } = await params;
  if (!TABS.includes(tab as Tab)) notFound();

  return (
    <PortalShell tab={tab}>
      {tab === "catalogue" && <CatalogTab />}
      {tab === "commandes" && <OrdersTab />}
      {tab === "livraison" && (
        <Suspense fallback={null}>
          <DeliveryTab />
        </Suspense>
      )}
      {tab === "compte" && <AccountTab />}
    </PortalShell>
  );
}
