export function AdminStyles() {
  return (
    <style>{`
      .admin-wrap {
        max-width: 1280px;
        margin: 0 auto;
        padding: 42px 64px 80px;
      }
      .admin-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 18px;
      }
      .admin-panel {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 8px;
        padding: 24px;
        box-shadow: 0 1px 3px rgba(22, 50, 79, 0.05);
      }
      .admin-table {
        width: 100%;
        border-collapse: collapse;
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 8px;
        overflow: hidden;
      }
      .admin-table th,
      .admin-table td {
        padding: 14px 16px;
        border-bottom: 1px solid var(--border);
        text-align: left;
        vertical-align: top;
      }
      .admin-table th {
        background: var(--surface-container-low);
        color: var(--primary);
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      .admin-form {
        display: grid;
        gap: 18px;
      }
      .admin-field {
        display: grid;
        gap: 7px;
      }
      .admin-field label {
        color: var(--primary);
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.05em;
        text-transform: uppercase;
      }
      .admin-input,
      .admin-textarea,
      .admin-select {
        width: 100%;
        border: 1px solid var(--border);
        border-radius: 6px;
        padding: 11px 12px;
        color: var(--ink);
        background: var(--surface);
        font: inherit;
      }
      .admin-textarea {
        min-height: 130px;
        resize: vertical;
      }
      .admin-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
      }
      .admin-danger {
        background: #fff5f6;
        border: 1px solid #f2c3cc;
        color: #8a1538;
      }
      @media (max-width: 720px) {
        .admin-wrap {
          padding: 32px 16px 64px;
        }
        .admin-table,
        .admin-table tbody,
        .admin-table tr,
        .admin-table td {
          display: block;
          width: 100%;
        }
        .admin-table thead {
          display: none;
        }
        .admin-table td {
          border-bottom: none;
        }
        .admin-table tr {
          border-bottom: 1px solid var(--border);
        }
      }
    `}</style>
  );
}
