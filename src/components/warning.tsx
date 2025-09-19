import React from "react";

type hintProps = {
  mode: "hint";
};

type warningProps = {
  mode: "warning";
  level: "medium" | "low";
};

type InfoBoxProps = hintProps | warningProps;

function InfoBox(props: InfoBoxProps) {
  const { mode } = props;
  if (mode === "warning") {
    const { level } = props;
    return (
      <div
        className={` border border-yellow-200 rounded-lg p-4 mb-4 ${
          level === "medium" ? "bg-yellow-200" : "bg-yellow-50"
        }`}
      >
        <div className="flex items-center">
          <div className="text-yellow-600 mr-3">⚠️</div>
          <div>
            <h3 className="text-yellow-800 font-medium">Warning</h3>
            <p className="text-yellow-700 text-sm">
              You have 5+ notes. Consider organizing them.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
      <div className="flex items-center">
        <div className="text-blue-600 mr-3">💡</div>
        <div>
          <h3 className="text-blue-800 font-medium">Hint</h3>
          <p className="text-blue-700 text-sm">
            Add a title and description to create your first note.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoBox;
