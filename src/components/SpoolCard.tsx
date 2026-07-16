import type { Spool } from "../types";

interface SpoolCardProps {
  spool: Spool;
  onDelete: (id: string) => void;
}

export default function SpoolCard({ spool, onDelete }: SpoolCardProps) {
  return (
    <div style={{ 
      border: "1px solid #475569", 
      borderRadius: "8px", 
      padding: "1rem", 
      marginBottom: "1rem",
      backgroundColor: spool.color,
      color: "#f8fafc"
    }}>
      
      <h3 style={{ margin: "0 0 0.25rem 0" }}>
        {spool.brand} ({spool.material})
      </h3>
      
      <p style={{ margin: 0, color: "#94a3b8", fontSize: "0.875rem" }}>
        Price: ${spool.purchasePrice.toFixed(2)} | Total Weight: {spool.totalWeight}g
      </p>

    </div>
  );
}