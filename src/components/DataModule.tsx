export default function DataModule() {
  return (
    <div className="data-module">
      <div className="data-module__header">
        <h2>Database</h2>
        <div className="button-bar">
          <button className="btn">
            <i className="fas fa-plus"></i>
            <span>Add</span>
          </button>

          <button className="btn">
            <i className="fas fa-plus"></i>
            <span>Add 10</span>
          </button>

          <button className="btn">
            <i className="fas fa-sync-alt"></i>
            <span>Refresh</span>
          </button>
        </div>
      </div>
      <div className="data-module__content"></div>
    </div>
  );
}
