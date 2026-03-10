import { useAtomValue, useAtom } from "jotai";
import { isProjectModalVisibleAtom, chosenProjectDataAtom } from "../store";

export default function ProjectModal() {
  const projectData = useAtomValue(chosenProjectDataAtom);
  const [isVisible, setIsVisible] = useAtom(isProjectModalVisibleAtom);

  // Filter out links whose link value is "-"
  const validLinks = projectData.links.filter(
    (linkData) => linkData.link && linkData.link !== "-"
  );

  return (
    isVisible && (
      <div className="modal">
        <div className="modal-content">
          <h1>{projectData.title}</h1>
          {projectData.description && (
            <p>{projectData.description}</p>
          )}
          <div className="modal-btn-container">
            {validLinks.map((linkData) => (
              <button
                key={linkData.id}
                className={"modal-btn"}
                onClick={() => {
                  window.open(linkData.link, "_blank");
                }}
              >
                {linkData.name}
              </button>
            ))}
            <button
              className={"modal-btn"}
              onClick={() => {
                setIsVisible(false);
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )
  );
}
