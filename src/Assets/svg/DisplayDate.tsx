import * as React from "react";

function DisplayDate(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={313} height={16} fill="none" {...props}>
      <path
        d="M5.82 11.5c4.333-.24 7.693-.507 10.08-.8-.227.693-.4 1.427-.52 2.2-.12.773-.18 1.473-.18 2.1H.9l-.02-.42c0-1.307.38-2.44 1.14-3.4.773-.96 1.847-1.847 3.22-2.66.4-.24 1.027-.547 1.88-.92 1.107-.48 1.96-.9 2.56-1.26.6-.373.9-.74.9-1.1a1.26 1.26 0 00-.56-1.08c-.373-.267-.953-.4-1.74-.4-.867 0-1.527.22-1.98.66-.44.44-.66 1-.66 1.68 0 .213.02.433.06.66a64.836 64.836 0 00-4.9-.44c0-1.133.293-2.153.88-3.06.6-.92 1.493-1.647 2.68-2.18 1.2-.533 2.667-.8 4.4-.8 1.587 0 2.907.22 3.96.66 1.067.427 1.847.973 2.34 1.64.507.653.76 1.327.76 2.02 0 .8-.18 1.487-.54 2.06-.347.573-.853 1.087-1.52 1.54-.653.44-1.533.92-2.64 1.44-.16.08-.42.173-.78.28-.36.093-.587.153-.68.18-.947.28-1.7.513-2.26.7-.56.187-1.087.42-1.58.7zm20.06 3.7c-2.867 0-4.98-.66-6.34-1.98-1.36-1.32-2.04-3.153-2.04-5.5 0-2.333.68-4.153 2.04-5.46C20.912.94 23.025.28 25.88.28c2.853 0 4.96.66 6.32 1.98 1.36 1.307 2.04 3.127 2.04 5.46 0 2.347-.68 4.18-2.04 5.5-1.36 1.32-3.467 1.98-6.32 1.98zm.02-3.5c1.226 0 2.12-.373 2.68-1.12.56-.76.84-1.713.84-2.86 0-1.133-.28-2.073-.84-2.82-.56-.76-1.454-1.14-2.68-1.14-1.267 0-2.187.38-2.76 1.14-.56.747-.84 1.687-.84 2.82 0 1.133.28 2.08.84 2.84.573.76 1.493 1.14 2.76 1.14zm14.96-.2c4.332-.24 7.692-.507 10.08-.8-.228.693-.4 1.427-.52 2.2-.12.773-.18 1.473-.18 2.1h-14.3l-.02-.42c0-1.307.38-2.44 1.14-3.4.772-.96 1.846-1.847 3.22-2.66.4-.24 1.026-.547 1.88-.92 1.106-.48 1.96-.9 2.56-1.26.6-.373.9-.74.9-1.1a1.26 1.26 0 00-.56-1.08c-.374-.267-.954-.4-1.74-.4-.868 0-1.528.22-1.98.66-.44.44-.66 1-.66 1.68 0 .213.02.433.06.66a64.839 64.839 0 00-4.9-.44c0-1.133.292-2.153.88-3.06.6-.92 1.492-1.647 2.68-2.18 1.2-.533 2.666-.8 4.4-.8 1.586 0 2.906.22 3.96.66 1.066.427 1.846.973 2.34 1.64.506.653.76 1.327.76 2.02 0 .8-.18 1.487-.54 2.06-.348.573-.854 1.087-1.52 1.54-.654.44-1.534.92-2.64 1.44-.16.08-.42.173-.78.28-.36.093-.588.153-.68.18-.948.28-1.7.513-2.26.7-.56.187-1.088.42-1.58.7zm19.718-.2c1.2-.027 2.087-.053 2.66-.08V15h-10.58v-3.78c1.44.053 2.527.08 3.26.08V4.4c-.48 1.053-1.46 1.733-2.94 2.04-.04-1.573-.186-3.007-.44-4.3 1.067-.147 1.807-.327 2.22-.54.427-.227.754-.473.98-.74.24-.267.4-.447.48-.54V.28h4.36V11.3zm5.638 3.9a2.043 2.043 0 01-1.5-.62 2.11 2.11 0 01-.62-1.52c0-.587.207-1.087.62-1.5.413-.413.913-.62 1.5-.62.573 0 1.067.213 1.48.64.427.413.64.907.64 1.48 0 .587-.213 1.093-.64 1.52a2.02 2.02 0 01-1.48.62zm15.913 0c-2.866 0-4.98-.66-6.34-1.98-1.36-1.32-2.04-3.153-2.04-5.5 0-2.333.68-4.153 2.04-5.46C77.163.94 79.276.28 82.13.28c2.854 0 4.96.66 6.32 1.98 1.36 1.307 2.04 3.127 2.04 5.46 0 2.347-.68 4.18-2.04 5.5-1.36 1.32-3.466 1.98-6.32 1.98zm.02-3.5c1.227 0 2.12-.373 2.68-1.12.56-.76.84-1.713.84-2.86 0-1.133-.28-2.073-.84-2.82-.56-.76-1.453-1.14-2.68-1.14-1.266 0-2.186.38-2.76 1.14-.56.747-.84 1.687-.84 2.82 0 1.133.28 2.08.84 2.84.574.76 1.494 1.14 2.76 1.14zM91.093.46h14.48v2.58C102.96 7 100.94 10.987 99.513 15h-5.4c1.453-3.613 3.367-7.207 5.74-10.78-3.693 0-6.613.067-8.76.2V.46zM108.56 15.2a2.042 2.042 0 01-1.5-.62 2.111 2.111 0 01-.62-1.52c0-.587.207-1.087.62-1.5.413-.413.913-.62 1.5-.62.573 0 1.067.213 1.48.64.427.413.64.907.64 1.48 0 .587-.213 1.093-.64 1.52a2.02 2.02 0 01-1.48.62zm8.549-3.7c4.333-.24 7.693-.507 10.08-.8a13.92 13.92 0 00-.52 2.2c-.12.773-.18 1.473-.18 2.1h-14.3l-.02-.42c0-1.307.38-2.44 1.14-3.4.773-.96 1.847-1.847 3.22-2.66.4-.24 1.027-.547 1.88-.92 1.107-.48 1.96-.9 2.56-1.26.6-.373.9-.74.9-1.1 0-.453-.187-.813-.56-1.08-.373-.267-.953-.4-1.74-.4-.867 0-1.527.22-1.98.66-.44.44-.66 1-.66 1.68 0 .213.02.433.06.66a64.82 64.82 0 00-4.9-.44c0-1.133.293-2.153.88-3.06.6-.92 1.493-1.647 2.68-2.18 1.2-.533 2.667-.8 4.4-.8 1.587 0 2.907.22 3.96.66 1.067.427 1.847.973 2.34 1.64.507.653.76 1.327.76 2.02 0 .8-.18 1.487-.54 2.06-.347.573-.853 1.087-1.52 1.54-.653.44-1.533.92-2.64 1.44-.16.08-.42.173-.78.28-.36.093-.587.153-.68.18-.947.28-1.7.513-2.26.7-.56.187-1.087.42-1.58.7zm19.719-.2c1.2-.027 2.087-.053 2.66-.08V15h-10.58v-3.78c1.44.053 2.527.08 3.26.08V4.4c-.48 1.053-1.46 1.733-2.94 2.04-.04-1.573-.186-3.007-.44-4.3 1.067-.147 1.807-.327 2.22-.54.427-.227.754-.473.98-.74.24-.267.4-.447.48-.54V.28h4.36V11.3zm22.722-5.04c0 1-.193 1.907-.58 2.72a4.374 4.374 0 01-1.68 1.9c-.747.453-1.653.68-2.72.68-1.307 0-2.46-.42-3.46-1.26-.24-.2-.513-.493-.82-.88a5.816 5.816 0 00-.62-.64.8.8 0 00-.56-.2c-.28 0-.493.107-.64.32-.133.213-.173.48-.12.8h-4.4c0-.88.193-1.727.58-2.54a4.89 4.89 0 011.7-1.98c.747-.52 1.64-.78 2.68-.78.693 0 1.353.12 1.98.36.64.24 1.213.593 1.72 1.06.12.107.333.34.64.7a8.5 8.5 0 00.62.66c.16.133.327.2.5.2.28 0 .48-.087.6-.26.133-.187.193-.473.18-.86h4.4zm10.02 5.24c4.333-.24 7.693-.507 10.08-.8a13.92 13.92 0 00-.52 2.2c-.12.773-.18 1.473-.18 2.1h-14.3l-.02-.42c0-1.307.38-2.44 1.14-3.4.773-.96 1.847-1.847 3.22-2.66.4-.24 1.027-.547 1.88-.92 1.107-.48 1.96-.9 2.56-1.26.6-.373.9-.74.9-1.1 0-.453-.187-.813-.56-1.08-.373-.267-.953-.4-1.74-.4-.867 0-1.527.22-1.98.66-.44.44-.66 1-.66 1.68 0 .213.02.433.06.66a64.82 64.82 0 00-4.9-.44c0-1.133.293-2.153.88-3.06.6-.92 1.493-1.647 2.68-2.18 1.2-.533 2.667-.8 4.4-.8 1.587 0 2.907.22 3.96.66 1.067.427 1.847.973 2.34 1.64.507.653.76 1.327.76 2.02 0 .8-.18 1.487-.54 2.06-.347.573-.853 1.087-1.52 1.54-.653.44-1.533.92-2.64 1.44-.16.08-.42.173-.78.28-.36.093-.587.153-.68.18-.947.28-1.7.513-2.26.7-.56.187-1.087.42-1.58.7zm20.059 3.7c-2.866 0-4.98-.66-6.34-1.98-1.36-1.32-2.04-3.153-2.04-5.5 0-2.333.68-4.153 2.04-5.46 1.374-1.32 3.487-1.98 6.34-1.98 2.854 0 4.96.66 6.32 1.98 1.36 1.307 2.04 3.127 2.04 5.46 0 2.347-.68 4.18-2.04 5.5-1.36 1.32-3.466 1.98-6.32 1.98zm.02-3.5c1.227 0 2.12-.373 2.68-1.12.56-.76.84-1.713.84-2.86 0-1.133-.28-2.073-.84-2.82-.56-.76-1.453-1.14-2.68-1.14-1.266 0-2.186.38-2.76 1.14-.56.747-.84 1.687-.84 2.82 0 1.133.28 2.08.84 2.84.574.76 1.494 1.14 2.76 1.14zm14.96-.2c4.333-.24 7.693-.507 10.08-.8a13.92 13.92 0 00-.52 2.2c-.12.773-.18 1.473-.18 2.1h-14.3l-.02-.42c0-1.307.38-2.44 1.14-3.4.773-.96 1.847-1.847 3.22-2.66.4-.24 1.027-.547 1.88-.92 1.107-.48 1.96-.9 2.56-1.26.6-.373.9-.74.9-1.1 0-.453-.187-.813-.56-1.08-.373-.267-.953-.4-1.74-.4-.867 0-1.527.22-1.98.66-.44.44-.66 1-.66 1.68 0 .213.02.433.06.66a64.82 64.82 0 00-4.9-.44c0-1.133.293-2.153.88-3.06.6-.92 1.493-1.647 2.68-2.18 1.2-.533 2.667-.8 4.4-.8 1.587 0 2.907.22 3.96.66 1.067.427 1.847.973 2.34 1.64.507.653.76 1.327.76 2.02 0 .8-.18 1.487-.54 2.06-.347.573-.853 1.087-1.52 1.54-.653.44-1.533.92-2.64 1.44-.16.08-.42.173-.78.28-.36.093-.587.153-.68.18-.947.28-1.7.513-2.26.7-.56.187-1.087.42-1.58.7zm19.719-.2c1.2-.027 2.087-.053 2.66-.08V15h-10.58v-3.78c1.44.053 2.527.08 3.26.08V4.4c-.48 1.053-1.46 1.733-2.94 2.04-.04-1.573-.186-3.007-.44-4.3 1.067-.147 1.807-.327 2.22-.54.427-.227.754-.473.98-.74.24-.267.4-.447.48-.54V.28h4.36V11.3zm5.638 3.9a2.042 2.042 0 01-1.5-.62 2.111 2.111 0 01-.62-1.52c0-.587.207-1.087.62-1.5.413-.413.913-.62 1.5-.62.573 0 1.067.213 1.48.64.427.413.64.907.64 1.48 0 .587-.213 1.093-.64 1.52a2.02 2.02 0 01-1.48.62zm15.913 0c-2.866 0-4.98-.66-6.34-1.98-1.36-1.32-2.04-3.153-2.04-5.5 0-2.333.68-4.153 2.04-5.46 1.374-1.32 3.487-1.98 6.34-1.98 2.854 0 4.96.66 6.32 1.98 1.36 1.307 2.04 3.127 2.04 5.46 0 2.347-.68 4.18-2.04 5.5-1.36 1.32-3.466 1.98-6.32 1.98zm.02-3.5c1.227 0 2.12-.373 2.68-1.12.56-.76.84-1.713.84-2.86 0-1.133-.28-2.073-.84-2.82-.56-.76-1.453-1.14-2.68-1.14-1.266 0-2.186.38-2.76 1.14-.56.747-.84 1.687-.84 2.82 0 1.133.28 2.08.84 2.84.574.76 1.494 1.14 2.76 1.14zM254.843.46h14.48v2.58C266.71 7 264.69 10.987 263.263 15h-5.4c1.453-3.613 3.367-7.207 5.74-10.78-3.693 0-6.613.067-8.76.2V.46zM272.31 15.2a2.042 2.042 0 01-1.5-.62 2.111 2.111 0 01-.62-1.52c0-.587.207-1.087.62-1.5.413-.413.913-.62 1.5-.62.573 0 1.067.213 1.48.64.427.413.64.907.64 1.48 0 .587-.213 1.093-.64 1.52a2.02 2.02 0 01-1.48.62zm12.553-3.7c4.333-.24 7.693-.507 10.08-.8a13.92 13.92 0 00-.52 2.2c-.12.773-.18 1.473-.18 2.1h-14.3l-.02-.42c0-1.307.38-2.44 1.14-3.4.773-.96 1.847-1.847 3.22-2.66.4-.24 1.027-.547 1.88-.92 1.107-.48 1.96-.9 2.56-1.26.6-.373.9-.74.9-1.1 0-.453-.187-.813-.56-1.08-.373-.267-.953-.4-1.74-.4-.867 0-1.527.22-1.98.66-.44.44-.66 1-.66 1.68 0 .213.02.433.06.66a64.82 64.82 0 00-4.9-.44c0-1.133.293-2.153.88-3.06.6-.92 1.493-1.647 2.68-2.18 1.2-.533 2.667-.8 4.4-.8 1.587 0 2.907.22 3.96.66 1.067.427 1.847.973 2.34 1.64.507.653.76 1.327.76 2.02 0 .8-.18 1.487-.54 2.06-.347.573-.853 1.087-1.52 1.54-.653.44-1.533.92-2.64 1.44-.16.08-.42.173-.78.28-.36.093-.587.153-.68.18-.947.28-1.7.513-2.26.7-.56.187-1.087.42-1.58.7zm20.839-6.72c1.52 0 2.794.213 3.82.64 1.04.413 1.814.98 2.32 1.7.52.707.78 1.5.78 2.38 0 2-.7 3.453-2.1 4.36-1.386.893-3.246 1.34-5.58 1.34-1.96 0-3.686-.327-5.18-.98-1.48-.667-2.553-1.78-3.22-3.34.734-.107 1.534-.28 2.4-.52.88-.24 1.674-.487 2.38-.74.28.573.674.993 1.18 1.26.507.253 1.187.38 2.04.38.907 0 1.654-.147 2.24-.44.6-.293.9-.7.9-1.22 0-.533-.26-.98-.78-1.34-.52-.36-1.313-.54-2.38-.54-.693 0-1.326.127-1.9.38-.573.24-.986.587-1.24 1.04h-4.62c.32-1.373.6-2.853.84-4.44.254-1.587.407-2.993.46-4.22h14.04v3.88a79.682 79.682 0 00-4.2-.16c-1.306-.027-3.14-.04-5.5-.04l-.2 1.12c1.014-.333 2.18-.5 3.5-.5z"
        fill="#fff"
      />
    </svg>
  );
}

const MemoDisplayDate = React.memo(DisplayDate);
export default MemoDisplayDate;