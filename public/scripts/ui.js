(() => {
  function me(e, t = {}) {
    let { topRight: l = !0, bottomLeft: o = !0 } = t;
    if ((e.querySelectorAll(".glow-effect").forEach((a) => a.remove()), l)) {
      let a = document.createElement("span");
      ((a.className = "glow-effect glow-effect--shine"), e.appendChild(a));
      let d = document.createElement("span");
      ((d.className = "glow-effect glow-effect--glow"), e.appendChild(d));
      let c = document.createElement("span");
      ((c.className = "glow-effect glow-effect--glow glow-effect--glow-bright"),
        e.appendChild(c));
    }
    if (o) {
      let a = document.createElement("span");
      ((a.className = "glow-effect glow-effect--shine glow-effect--bottom"),
        e.appendChild(a));
      let d = document.createElement("span");
      ((d.className = "glow-effect glow-effect--glow glow-effect--bottom"),
        e.appendChild(d));
      let c = document.createElement("span");
      ((c.className =
        "glow-effect glow-effect--glow glow-effect--glow-bright glow-effect--bottom"),
        e.appendChild(c));
    }
  }
  function Y() {
    document.querySelectorAll(".btn").forEach((e) => {
      me(e);
    });
  }
  function K(e) {
    let t = document.querySelector(e);
    if (!t) return;
    let l = t.querySelector(".custom-select-trigger"),
      o = t.querySelector(".custom-select-dropdown"),
      a = t.querySelectorAll(".custom-select-option"),
      d = t.querySelector(".select-value"),
      c = t.querySelector("select");
    (l.addEventListener("click", (n) => {
      n.stopPropagation();
      let r = t.classList.contains("open");
      (z(),
        r ||
          (t.classList.add("open"), l.setAttribute("aria-expanded", "true")));
    }),
      a.forEach((n) => {
        n.addEventListener("click", () => {
          let r = n.getAttribute("data-value"),
            i = n.textContent;
          ((d.textContent = i),
            c && ((c.value = r), c.dispatchEvent(new Event("change"))),
            a.forEach((m) => {
              (m.classList.remove("selected"),
                m.setAttribute("aria-selected", "false"));
            }),
            n.classList.add("selected"),
            n.setAttribute("aria-selected", "true"),
            t.classList.remove("open"),
            l.setAttribute("aria-expanded", "false"));
        });
      }),
      l.addEventListener("keydown", (n) => {
        n.key === "Enter" || n.key === " "
          ? (n.preventDefault(), l.click())
          : n.key === "Escape" &&
            (t.classList.remove("open"),
            l.setAttribute("aria-expanded", "false"));
      }));
  }
  function z() {
    document.querySelectorAll(".custom-select.open").forEach((e) => {
      (e.classList.remove("open"),
        e
          .querySelector(".custom-select-trigger")
          ?.setAttribute("aria-expanded", "false"));
    });
  }
  document.addEventListener("click", z);
  var pe = {
      blue: 222,
      purple: 280,
      green: 145,
      red: 0,
      orange: 30,
      cyan: 190,
    },
    k = localStorage.getItem("darkMode") !== "false",
    w = localStorage.getItem("primaryColor") || "blue",
    v = localStorage.getItem("secondaryColor") || "none";
  function D() {
    let e = document.getElementById("mode-toggle"),
      t = document.querySelectorAll(
        '.color-buttons[data-color-type="primary"] .color-btn',
      ),
      l = document.querySelectorAll(
        '.color-buttons[data-color-type="secondary"] .color-btn',
      );
    (k
      ? (document.body.classList.add("dark-mode"),
        e && (e.textContent = "\u{1F319}"))
      : (document.body.classList.remove("dark-mode"),
        e && (e.textContent = "\u2600\uFE0F")),
      document.body.classList.remove(
        "primary-blue",
        "primary-purple",
        "primary-green",
        "primary-red",
        "primary-orange",
        "primary-cyan",
        "secondary-blue",
        "secondary-purple",
        "secondary-green",
        "secondary-red",
        "secondary-orange",
        "secondary-cyan",
      ),
      document.body.classList.add(`primary-${w}`),
      v !== "none"
        ? (document.body.classList.add(`secondary-${v}`),
          document.documentElement.style.removeProperty("--hue2"))
        : document.documentElement.style.setProperty("--hue2", pe[w]),
      t.forEach((o) => {
        o.classList.toggle("active", o.getAttribute("data-color") === w);
      }),
      l.forEach((o) => {
        o.classList.toggle("active", o.getAttribute("data-color") === v);
      }));
  }
  function Q() {
    let e = document.getElementById("mode-toggle"),
      t = document.getElementById("settings-btn"),
      l = document.getElementById("settings-modal"),
      o = document.getElementById("modal-close"),
      a = document.querySelectorAll(
        '.color-buttons[data-color-type="primary"] .color-btn',
      ),
      d = document.querySelectorAll(
        '.color-buttons[data-color-type="secondary"] .color-btn',
      );
    (D(),
      t &&
        l &&
        o &&
        (t.addEventListener("click", () => {
          l.classList.add("show");
        }),
        o.addEventListener("click", () => {
          l.classList.remove("show");
        }),
        l.addEventListener("click", (c) => {
          c.target === l && l.classList.remove("show");
        })),
      e &&
        e.addEventListener("click", function () {
          ((k = !k), localStorage.setItem("darkMode", k), D());
        }),
      a.forEach((c) => {
        c.addEventListener("click", function () {
          ((w = this.getAttribute("data-color")),
            localStorage.setItem("primaryColor", w),
            D());
        });
      }),
      d.forEach((c) => {
        c.addEventListener("click", function () {
          ((v = this.getAttribute("data-color")),
            localStorage.setItem("secondaryColor", v),
            D());
        });
      }));
  }
  var p = "checked";
  var S = "[Not specified]";
  function f(e) {
    return e === p ? "Yes" : "No";
  }
  function $(e, t = 30) {
    return !e || e === "N/A" || e === S
      ? e
      : e.length > t
        ? "..." + e.slice(-t)
        : e;
  }
  function j(e, t) {
    if (!e || e.length === 0) return "";
    let l = `

REPLACED PARTS (${e.length}):`;
    return (
      e.forEach((o) => {
        let a = $(o.oldSerialNumber || "N/A"),
          d = $(o.newSerialNumber || "N/A"),
          c = o.licensePlate || "N/A",
          n = `
\u2022 ${a} \u2192 ${d} (LP: ${c})`;
        if (t === "dbd") {
          let r = o.driveLocation || "N/A",
            i = o.binNumber || "N/A";
          n += ` | Loc: ${r}, Bin: ${i}`;
        }
        l += n;
      }),
      l
    );
  }
  function J(e) {
    if (!e || e.length === 0) return "";
    let t = `

MOVED DBDs (${e.length}):`;
    return (
      e.forEach((l) => {
        let o = $(l.dbdSerialNumber || "N/A"),
          a = l.slotNumber || "N/A";
        t += `
\u2022 ${o} (Slot: ${a})`;
      }),
      t
    );
  }
  function x(e) {
    return e.wasEscalated === p
      ? `

ESCALATION DETAILS:
- Escalated To: ${e.escalatedTo || S}
- Senior Tech Approval: ${e.seniorTechAlias || S}`
      : "";
  }
  var N = [
      { name: "taskId", label: "Task ID", type: "text" },
      {
        name: "assetTagConfirmed",
        label: "Was the asset tag visually confirmed?",
        type: "checkbox",
      },
      { name: "uponArrival", label: "Upon Arrival:", type: "textarea" },
    ],
    F = [
      {
        name: "partReplaced",
        label: "Part(s) replaced?",
        type: "checkbox",
        hasConditionalFields: !0,
      },
      {
        name: "oldSerialNumber",
        label: "Old Serial Number",
        type: "text",
        conditionalOn: { field: "partReplaced", value: p },
      },
      {
        name: "newSerialNumber",
        label: "New Serial Number",
        type: "text",
        conditionalOn: { field: "partReplaced", value: p },
      },
      {
        name: "licensePlate",
        label: "License Plate",
        type: "text",
        conditionalOn: { field: "partReplaced", value: p },
      },
    ],
    A = [
      { name: "actionsTaken", label: "Actions Taken", type: "textarea" },
      {
        name: "wasEscalated",
        label: "Was this ticket escalated?",
        type: "checkbox",
        hasConditionalFields: !0,
      },
      {
        name: "escalatedTo",
        label: "Who was it escalated to?",
        type: "text",
        conditionalOn: { field: "wasEscalated", value: p },
      },
      {
        name: "seniorTechAlias",
        label: "Alias of the senior who approved this:",
        type: "text",
        conditionalOn: { field: "wasEscalated", value: p },
      },
    ],
    E = {
      breakfix: {
        title: "Break/Fix Task Notes",
        fields: [...N, ...F, ...A],
        format: (e) => `TASK ID: ${e.taskId || "[No ID]"}
ASSET TAG CONFIRMED: ${f(e.assetTagConfirmed)}

UPON ARRIVAL:
${e.uponArrival || "[No arrival notes recorded]"}

ACTIONS TAKEN:
${e.actionsTaken || "[No actions recorded]"}

TICKET ESCALATED: ${f(e.wasEscalated)}${x(e)}`,
      },
      network: {
        title: "Network Task Notes",
        fields: [
          ...N,
          { name: "sourceDevice", label: "Source Device:Port", type: "text" },
          { name: "endDevice", label: "End Device:Port", type: "text" },
          ...F,
          ...A,
        ],
        format: (e) => `TASK ID: ${e.taskId || "[No ID]"}
ASSET TAG CONFIRMED: ${f(e.assetTagConfirmed)}

UPON ARRIVAL:
${e.uponArrival || "[No arrival notes recorded]"}
SOURCE DEVICE:PORT: ${e.sourceDevice || "N/A"}
END DEVICE:PORT: ${e.endDevice || "N/A"}

ACTIONS TAKEN:
${e.actionsTaken || "[No actions recorded]"}

TICKET ESCALATED: ${f(e.wasEscalated)}${x(e)}`,
      },
      dbd: {
        title: "DBD Task Notes",
        fields: [
          ...N,
          ...F,
          {
            name: "driveLocation",
            label: "Location of drive being replaced",
            type: "text",
            conditionalOn: { field: "partReplaced", value: p },
          },
          {
            name: "binNumber",
            label: "Bin #",
            type: "text",
            conditionalOn: { field: "partReplaced", value: p },
          },
          ...A,
        ],
        format: (e) => `TASK ID: ${e.taskId || "[No ID]"}
ASSET TAG CONFIRMED: ${f(e.assetTagConfirmed)}

UPON ARRIVAL:
${e.uponArrival || "[No arrival notes recorded]"}

ACTIONS TAKEN:
${e.actionsTaken || "[No actions recorded]"}

TICKET ESCALATED: ${f(e.wasEscalated)}${x(e)}`,
      },
      mobo: {
        title: "Motherboard Task Notes",
        fields: [
          ...N,
          {
            name: "partReplaced",
            label: "Part(s) replaced?",
            type: "checkbox",
            hasConditionalFields: !0,
          },
          {
            name: "oldSerialNumber",
            label: "Old Motherboard Serial Number",
            type: "text",
            conditionalOn: { field: "partReplaced", value: p },
          },
          {
            name: "newSerialNumber",
            label: "New Motherboard Serial Number",
            type: "text",
            conditionalOn: { field: "partReplaced", value: p },
          },
          {
            name: "licensePlate",
            label: "License Plate",
            type: "text",
            conditionalOn: { field: "partReplaced", value: p },
          },
          {
            name: "dbdMoved",
            label: "Were DBDs moved from old motherboard to new?",
            type: "checkbox",
            hasConditionalFields: !0,
          },
          {
            name: "dbdSerialNumber",
            label: "DBD Serial Number",
            type: "text",
            conditionalOn: { field: "dbdMoved", value: p },
          },
          {
            name: "slotNumber",
            label: "Slot #",
            type: "text",
            conditionalOn: { field: "dbdMoved", value: p },
          },
          ...A,
        ],
        format: (e) => `TASK ID: ${e.taskId || "[No ID]"}
ASSET TAG CONFIRMED: ${f(e.assetTagConfirmed)}

UPON ARRIVAL:
${e.uponArrival || "[No arrival notes recorded]"}

ACTIONS TAKEN:
${e.actionsTaken || "[No actions recorded]"}

TICKET ESCALATED: ${f(e.wasEscalated)}${x(e)}`,
      },
      workwindow: {
        title: "Work Window Request Email",
        fields: [
          {
            type: "info",
            text: 'You can confirm availability for a specific dates via <a href="https://dccentral.microsoft.com/tasks/query/advanced/30704" target="_blank">SN-DCCentral</a> for SN or <a href="https://dccentral.microsoft.com/tasks/query/advanced/31722" target="_blank">SAT-DCCentral</a> for SAT. Our work window policy can be found <a href="https://microsoft.sharepoint.com/:w:/r/teams/dcops/reflib/_layouts/15/Doc.aspx?sourcedoc=%7B34AC5FCF-C562-4F64-922F-AD9AED915DEA%7D&file=Work%20Window%20Policy.docx&wdOrigin=TEAMS-MAGLEV.teams_ns.rwc&action=default&mobileredirect=true" target="_blank">here</a> for reference.',
          },
          { name: "taskId", label: "Task ID", type: "text" },
          { name: "date", label: "Suggested Date", type: "text" },
          { name: "time", label: "Time of Availability", type: "text" },
          {
            type: "info",
            text: 'If a task is quarantined, please direct the requestor to <a href="https://microsoft.sharepoint.com/sites/COIPartnerResourceCenter/SitePages/CO+-Partner-Resource-Center.aspx?ct=1748876712863&or=Teams-HL&ga=1&LOF=1&xsdata=MDV8MDJ8fDdlZjg4MTg4OGJiMjQ0MzBhMTFjMDhkZTFhMTY3ODAwfDcyZjk4OGJmODZmMTQxYWY5MWFiMmQ3Y2QwMTFkYjQ3fDB8MHw2Mzg5NzY4ODA5MzgxMTkxMDB8VW5rbm93bnxWR1ZoYlhOVFpXTjFjbWwwZVZObGNuWnBZMlY4ZXlKRFFTSTZJbFJsWVcxelgwRlVVRk5sY25acFkyVmZVMUJQVEU5R0lpd2lWaUk2SWpBdU1DNHdNREF3SWl3aVVDSTZJbGRwYmpNeUlpd2lRVTRpT2lKUGRHaGxjaUlzSWxkVUlqb3hNWDA9fDF8TDJOb1lYUnpMekU1T21KaVpHTm1OalUzTWpZNFpqUXhNVGs1Tm1Rek5UZGxObU16TnpFeFptTTNRSFJvY21WaFpDNTJNaTl0WlhOellXZGxjeTh4TnpZeU1Ea3hNamt5T0Rnd3w4YTcwMGYyOTdiZDE0NzE0YzkwNDA4ZGUxYTE2NzdmZnxlNzQ5NGE4MjI3NjI0N2Q5OGYwMTNlNDI2ZWFiMmI5ZA%3D%3D&sdata=ZGtMSy9JZVhOYlRFRnFHV1M0MlFWc1pQbEp1OXArZWdoSnpBVGY0bDlUbz0%3D&ovuser=72f988bf-86f1-41af-91ab-2d7cd011db47%2Caguajardo%40microsoft.com&OR=Teams-HL&CT=1762904435825&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI0OS8yNTExMDYxMzYwMSIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D" target="_blank">the CO&I Partner Resource Center</a> for further instructions on how to proceed with scheduling work windows for quarantined tasks.',
          },
        ],
        format: (
          e,
        ) => `WORK WINDOW REQUEST - TASK ID: ${e.taskId || "TaskIdHolder"}

Hello,

We are writing to schedule a work window for Task #${e.taskId || "TaskIdHolder"}. We are available to begin a work window between 09:00 AM CST and 02:00 PM CST or 09:00 PM CST and 02:00 AM CST. Our next available window is available for ${e.date || "DATE"} at ${e.time || "TIME"}. Please confirm whether this time is acceptable for your team.

Important considerations:
\u2022 A minimum of 24 hours' notice is required for all work windows to ensure System Services can confirm availability and prepare accordingly.
\u2022 Prompt confirmation is essential. Delayed replies may result in the proposed time slot becoming unavailable, as our resources are limited and we cannot reserve slots indefinitely.
\u2022 Please ensure all necessary traffic is removed or rerouted prior to the work window start time to facilitate a timely and efficient completion of the requested work.

We appreciate your prompt attention to this matter.`,
      },
      workAuth: {
        title: "Work Authorization Request",
        fields: [
          { name: "taskId", label: "Task ID", type: "text" },
          { name: "taskLink", label: "Task Link", type: "text" },
          { name: "sourceDevice", label: "Source Device:Port", type: "text" },
          {
            name: "expectedHop",
            label: "Expected Hop (leave empty if unknown)",
            type: "text",
          },
          { name: "endDevice", label: "End Device:Port", type: "text" },
          { name: "actionsTaken", label: "Actions being taken", type: "text" },
          {
            name: "assetTagConfirmed",
            label: "Was the asset tag visually confirmed?",
            type: "checkbox",
          },
          {
            name: "labelConfirmed",
            label: "Was the cable label visually confirmed?",
            type: "checkbox",
          },
          {
            name: "secondTech",
            label: "Alias of Second Tech QC",
            type: "text",
          },
        ],
        format: (e) => `LINK APPROVAL REQUEST - TASK ID: ${e.taskId || "N/A"}

Task Link: ${e.taskLink || "N/A"}
Source Device:Port: ${e.sourceDevice || "N/A"}
Expected Hop: ${e.expectedHop || "N/A"}
End Device:Port: ${e.endDevice || "N/A"}
Required Actions: ${e.actionsTaken || "N/A"}

Asset Tag Confirmed: ${f(e.assetTagConfirmed)}
Cable Label Verified: ${f(e.labelConfirmed)}
2nd Tech QC Alias: ${e.secondTech || "N/A"}`,
      },
    };
  function I(e) {
    let t;
    if (e.type === "textarea") t = document.createElement("textarea");
    else if (e.type === "select" && e.options) {
      t = document.createElement("select");
      let l = document.createElement("option");
      ((l.value = ""),
        (l.textContent = "-- Select --"),
        t.appendChild(l),
        e.options.forEach((o) => {
          let a = document.createElement("option");
          ((a.value = o), (a.textContent = o), t.appendChild(a));
        }));
    } else
      e.type === "checkbox"
        ? ((t = document.createElement("input")), (t.type = "checkbox"))
        : ((t = document.createElement("input")), (t.type = e.type));
    return (e.name && ((t.id = e.name), (t.name = e.name)), t);
  }
  function O(e) {
    let t = document.createElement("div");
    return (
      (t.style.padding = "12px"),
      (t.style.backgroundColor = "var(--highlight-bg)"),
      (t.style.borderLeft = "3px solid var(--primary-color)"),
      (t.style.borderRadius = "4px"),
      (t.style.fontSize = "14px"),
      (t.style.lineHeight = "1.5"),
      (t.style.color = "var(--text-color)"),
      (t.style.overflowWrap = "break-word"),
      (t.style.wordBreak = "break-word"),
      e && e.includes("<") ? (t.innerHTML = e) : (t.textContent = e),
      t
    );
  }
  var b = "breakfix";
  function M(e) {
    b = e;
  }
  function s() {
    let e = document.getElementById("preview");
    if (!e) return;
    let t = {},
      l = E[b];
    if (
      (l.fields.forEach((a) => {
        let d = document.getElementById(a.name);
        d &&
          (a.type === "checkbox"
            ? (t[a.name] = d.checked ? p : "")
            : (t[a.name] = d.value));
      }),
      ["breakfix", "dbd", "network", "mobo"].includes(b))
    ) {
      t.allParts = [];
      let a = document.getElementById("parts-table-body");
      if (a) {
        let d = b === "dbd" ? "tr.parts-row-primary" : "tr";
        a.querySelectorAll(d).forEach((n, r) => {
          let i = n.dataset.rowIndex,
            m = document.getElementById(`oldSerialNumber${i}`),
            u = document.getElementById(`newSerialNumber${i}`),
            h = document.getElementById(`licensePlate${i}`);
          if (m && u && h) {
            let R = {
              id: r + 1,
              oldSerialNumber: m.value,
              newSerialNumber: u.value,
              licensePlate: h.value,
            };
            if (b === "dbd") {
              let Z = document.getElementById(`driveLocation${i}`),
                G = document.getElementById(`binNumber${i}`);
              (Z && (R.driveLocation = Z.value), G && (R.binNumber = G.value));
            }
            t.allParts.push(R);
          }
        });
      }
    }
    if (b === "mobo") {
      t.allDBDs = [];
      let a = document.getElementById("dbds-table-body");
      a &&
        a.querySelectorAll("tr").forEach((c, n) => {
          let r = c.dataset.rowIndex,
            i = document.getElementById(`dbdSerialNumber${r}`),
            m = document.getElementById(`slotNumber${r}`);
          if (i && m) {
            let u = {
              id: n + 1,
              dbdSerialNumber: i.value,
              slotNumber: m.value,
            };
            t.allDBDs.push(u);
          }
        });
    }
    let o = l.format(t);
    (["breakfix", "dbd", "network", "mobo"].includes(b) &&
      t.partReplaced === p &&
      t.allParts &&
      t.allParts.length > 0 &&
      (o += j(t.allParts, b)),
      b === "mobo" &&
        t.dbdMoved === p &&
        t.allDBDs &&
        t.allDBDs.length > 0 &&
        (o += J(t.allDBDs)),
      (e.textContent = o));
  }
  function X() {
    let e = document.getElementById("preview"),
      t = document.getElementById("copy-message");
    if (!e) return;
    let l = e.textContent;
    navigator.clipboard && navigator.clipboard.writeText
      ? navigator.clipboard
          .writeText(l)
          .then(() => ee())
          .catch(() => _(l))
      : _(l);
  }
  function ee() {
    let e = document.getElementById("copy-message");
    e &&
      (e.classList.add("show"),
      setTimeout(() => {
        e.classList.remove("show");
      }, 2e3));
  }
  function _(e) {
    try {
      let t = document.createElement("textarea");
      ((t.value = e),
        (t.style.position = "fixed"),
        (t.style.left = "-999999px"),
        (t.style.top = "-999999px"),
        document.body.appendChild(t),
        t.focus(),
        t.select());
      let l = document.execCommand("copy");
      (document.body.removeChild(t),
        l
          ? ee()
          : (console.error("Fallback: Could not copy text"),
            alert("Could not copy text. Please select the text manually.")));
    } catch (t) {
      (console.error("Fallback: Could not copy text", t),
        alert("Could not copy text. Please select the text manually."));
    }
  }
  var te = 0,
    ne = 0,
    V = "breakfix";
  function g(e) {
    V = e;
  }
  function W(e) {
    if (V === "dbd") {
      let d = document.createDocumentFragment(),
        c = document.createElement("tr");
      ((c.dataset.rowIndex = e), (c.className = "parts-row-primary"));
      let n = document.createElement("td"),
        r = document.createElement("input");
      ((r.type = "text"),
        (r.name = `oldSerialNumber${e}`),
        (r.id = `oldSerialNumber${e}`),
        (r.placeholder = "Old Serial"),
        r.addEventListener("input", s),
        n.appendChild(r),
        c.appendChild(n),
        (n = document.createElement("td")),
        (r = document.createElement("input")),
        (r.type = "text"),
        (r.name = `newSerialNumber${e}`),
        (r.id = `newSerialNumber${e}`),
        (r.placeholder = "New Serial"),
        r.addEventListener("input", s),
        n.appendChild(r),
        c.appendChild(n),
        (n = document.createElement("td")),
        (r = document.createElement("input")),
        (r.type = "text"),
        (r.name = `licensePlate${e}`),
        (r.id = `licensePlate${e}`),
        (r.placeholder = "LP"),
        r.addEventListener("input", s),
        n.appendChild(r),
        c.appendChild(n),
        (n = document.createElement("td")),
        (n.rowSpan = 2));
      let i = document.createElement("button");
      ((i.type = "button"),
        (i.className = "delete-row-btn"),
        (i.textContent = "\xD7"),
        i.addEventListener("click", function () {
          oe(c, m);
        }),
        n.appendChild(i),
        c.appendChild(n));
      let m = document.createElement("tr");
      return (
        (m.dataset.rowIndex = e),
        (m.className = "parts-row-secondary"),
        (n = document.createElement("td")),
        (n.colSpan = 2),
        (r = document.createElement("input")),
        (r.type = "text"),
        (r.name = `driveLocation${e}`),
        (r.id = `driveLocation${e}`),
        (r.placeholder = "Drive Location"),
        r.addEventListener("input", s),
        n.appendChild(r),
        m.appendChild(n),
        (n = document.createElement("td")),
        (r = document.createElement("input")),
        (r.type = "text"),
        (r.name = `binNumber${e}`),
        (r.id = `binNumber${e}`),
        (r.placeholder = "Bin #"),
        r.addEventListener("input", s),
        n.appendChild(r),
        m.appendChild(n),
        d.appendChild(c),
        d.appendChild(m),
        d
      );
    }
    let t = document.createElement("tr");
    t.dataset.rowIndex = e;
    let l = document.createElement("td"),
      o = document.createElement("input");
    ((o.type = "text"),
      (o.name = `oldSerialNumber${e}`),
      (o.id = `oldSerialNumber${e}`),
      o.addEventListener("input", s),
      l.appendChild(o),
      t.appendChild(l),
      (l = document.createElement("td")),
      (o = document.createElement("input")),
      (o.type = "text"),
      (o.name = `newSerialNumber${e}`),
      (o.id = `newSerialNumber${e}`),
      o.addEventListener("input", s),
      l.appendChild(o),
      t.appendChild(l),
      (l = document.createElement("td")),
      (o = document.createElement("input")),
      (o.type = "text"),
      (o.name = `licensePlate${e}`),
      (o.id = `licensePlate${e}`),
      o.addEventListener("input", s),
      l.appendChild(o),
      t.appendChild(l),
      (l = document.createElement("td")));
    let a = document.createElement("button");
    return (
      (a.type = "button"),
      (a.className = "delete-row-btn"),
      (a.textContent = "\xD7"),
      a.addEventListener("click", function () {
        oe(t);
      }),
      l.appendChild(a),
      t.appendChild(l),
      t
    );
  }
  function ae() {
    te++;
    let e = document.getElementById("parts-table-body");
    e && (e.appendChild(W(te)), s());
  }
  function oe(e, t = null) {
    let l = document.getElementById("parts-table-body"),
      o = V === "dbd" ? 2 : 1;
    l && l.children.length > o && (e.remove(), t && t.remove(), s());
  }
  function q(e) {
    let t = document.createElement("tr");
    t.dataset.rowIndex = e;
    let l = document.createElement("td"),
      o = document.createElement("input");
    ((o.type = "text"),
      (o.name = `dbdSerialNumber${e}`),
      (o.id = `dbdSerialNumber${e}`),
      o.addEventListener("input", s),
      l.appendChild(o),
      t.appendChild(l),
      (l = document.createElement("td")),
      (o = document.createElement("input")),
      (o.type = "text"),
      (o.name = `slotNumber${e}`),
      (o.id = `slotNumber${e}`),
      o.addEventListener("input", s),
      l.appendChild(o),
      t.appendChild(l),
      (l = document.createElement("td")));
    let a = document.createElement("button");
    return (
      (a.type = "button"),
      (a.className = "delete-row-btn"),
      (a.textContent = "\xD7"),
      a.addEventListener("click", function () {
        ue(t);
      }),
      l.appendChild(a),
      t.appendChild(l),
      t
    );
  }
  function le() {
    ne++;
    let e = document.getElementById("dbds-table-body");
    e && (e.appendChild(q(ne)), s());
  }
  function ue(e) {
    let t = document.getElementById("dbds-table-body");
    t && t.children.length > 1 && (e.remove(), s());
  }
  var C = new Set(),
    T = "breakfix";
  function L(e) {
    ((T = e), g(e));
  }
  function fe() {
    let e = document.getElementById("details-panel"),
      t = document.getElementById("app");
    e && t && (e.classList.add("visible"), t.classList.add("has-details"));
  }
  function B() {
    let e = document.getElementById("details-panel"),
      t = document.getElementById("app"),
      l = document.getElementById("details-content");
    e &&
      t &&
      l &&
      (e.classList.remove("visible"),
      t.classList.remove("has-details"),
      (l.innerHTML = ""),
      C.clear());
  }
  function re() {
    let e = document.getElementById("details-content");
    if (e) {
      if (((e.innerHTML = ""), C.size === 0)) {
        B();
        return;
      }
      (fe(),
        C.forEach((t) => {
          be(t);
        }));
    }
  }
  function be(e) {
    let t = document.getElementById("details-content");
    if (!t) return;
    let l = E[T],
      o = document.createElement("div");
    if (
      ((o.className = "details-section"), (o.dataset.sectionId = e), C.size > 1)
    ) {
      let a = document.createElement("h4");
      ((a.className = "section-subheader"),
        e === "partReplaced" && (a.textContent = "Parts Replacement"),
        e === "wasEscalated" && (a.textContent = "Escalation Details"),
        e === "dbdMoved" && (a.textContent = "DBD Information"),
        o.appendChild(a));
    }
    if (
      e === "partReplaced" &&
      ["breakfix", "dbd", "network", "mobo"].includes(T)
    ) {
      if (T === "dbd") {
        let n = document.createElement("h4");
        ((n.className = "details-section-label"),
          (n.textContent = "Replaced DBDs"),
          o.appendChild(n));
      }
      let a = document.createElement("table");
      if (
        ((a.id = "parts-table"), (a.className = "parts-table"), T !== "dbd")
      ) {
        let n = document.createElement("thead"),
          r = document.createElement("tr");
        (["Old Serial", "New Serial", "License Plate", ""].forEach((m) => {
          let u = document.createElement("th");
          ((u.textContent = m), r.appendChild(u));
        }),
          n.appendChild(r),
          a.appendChild(n));
      }
      let d = document.createElement("tbody");
      ((d.id = "parts-table-body"),
        d.appendChild(W(0)),
        a.appendChild(d),
        o.appendChild(a));
      let c = document.createElement("div");
      ((c.className = "add-more-link"),
        (c.textContent = "+ Add Another Part"),
        c.addEventListener("click", ae),
        o.appendChild(c));
    }
    if (e === "dbdMoved" && T === "mobo") {
      let a = document.createElement("table");
      ((a.id = "dbds-table"), (a.className = "parts-table"));
      let d = document.createElement("thead"),
        c = document.createElement("tr");
      (["DBD Serial", "Slot #", ""].forEach((m) => {
        let u = document.createElement("th");
        ((u.textContent = m), c.appendChild(u));
      }),
        d.appendChild(c),
        a.appendChild(d));
      let r = document.createElement("tbody");
      ((r.id = "dbds-table-body"),
        r.appendChild(q(0)),
        a.appendChild(r),
        o.appendChild(a));
      let i = document.createElement("div");
      ((i.className = "add-more-link"),
        (i.textContent = "+ Add Another DBD"),
        i.addEventListener("click", le),
        o.appendChild(i));
    }
    (e === "wasEscalated" &&
      l.fields
        .filter(
          (d) => d.conditionalOn && d.conditionalOn.field === "wasEscalated",
        )
        .forEach((d) => {
          let c = document.createElement("div");
          c.className = "form-group";
          let n = document.createElement("label");
          (n.setAttribute("for", d.name), (n.textContent = d.label));
          let r = I(d);
          (r.addEventListener("input", s),
            c.appendChild(n),
            c.appendChild(r),
            o.appendChild(c));
        }),
      t.appendChild(o));
  }
  var P = "breakfix";
  function H(e) {
    ((P = e), L(e), g(e));
  }
  function ce() {
    let e = document.getElementById("template-select");
    if (!e) return;
    let t = P,
      l = e.value,
      o =
        (t === "network" && l === "workAuth") ||
        (t === "workAuth" && l === "network"),
      a = {};
    (o &&
      E[t].fields.forEach((c) => {
        if (c.name) {
          let n = document.getElementById(c.name);
          n &&
            (c.type === "checkbox"
              ? (a[c.name] = n.checked)
              : (a[c.name] = n.value));
        }
      }),
      H(l),
      U(),
      o &&
        E[P].fields.forEach((c) => {
          if (c.name && a[c.name] !== void 0) {
            let n = document.getElementById(c.name);
            n &&
              (c.type === "checkbox"
                ? ((n.checked = a[c.name]), c.hasConditionalFields && de(n))
                : (n.value = a[c.name]));
          }
        }),
      s());
  }
  function U() {
    let e = document.getElementById("template-form");
    if (!e) return;
    e.innerHTML = "";
    let t = E[P],
      l = [],
      o = [],
      a = [],
      d = !1;
    (t.fields.forEach((n) => {
      n.conditionalOn ||
        (n.type === "info"
          ? d
            ? o.push(n)
            : l.push(n)
          : ((d = !0), a.push(n)));
    }),
      l.forEach((n) => {
        let r = O(n.text || n.label);
        ((r.style.marginBottom = "15px"), e.appendChild(r));
      }));
    let c = document.createElement("tbody");
    (a.forEach((n) => {
      let r = document.createElement("tr"),
        i = document.createElement("td"),
        m = document.createElement("label");
      (m.setAttribute("for", n.name),
        (m.textContent = n.label),
        i.appendChild(m));
      let u = document.createElement("td"),
        h = I(n);
      (n.type === "checkbox" && n.hasConditionalFields
        ? h.addEventListener("change", function () {
            (de(this), s());
          })
        : n.type === "select" && n.hasConditionalFields
          ? h.addEventListener("change", he)
          : n.type === "select"
            ? h.addEventListener("change", s)
            : h.addEventListener("input", s),
        u.appendChild(h),
        r.appendChild(i),
        r.appendChild(u),
        c.appendChild(r));
    }),
      c.children.length > 0 && e.appendChild(c),
      o.forEach((n) => {
        let r = O(n.text || n.label);
        ((r.style.marginTop = "15px"), e.appendChild(r));
      }),
      B());
  }
  function de(e) {
    (e.checked ? C.add(e.id) : (C.delete(e.id), e.id, e.id), re());
  }
  function he(e) {
    let t = e.target,
      l = t.value;
    (document
      .querySelectorAll(`.conditional-field[data-depends-on="${t.id}"]`)
      .forEach((a) => {
        let d = a.getAttribute("data-depends-value");
        l === d
          ? (a.style.display = "block")
          : ((a.style.display = "none"),
            a
              .querySelectorAll("input, textarea, select")
              .forEach((n) => (n.value = "")));
      }),
      s());
  }
  function ie() {
    let e = document.getElementById("template-form");
    e &&
      (e.reset(),
      document
        .querySelectorAll('#template-form input[type="checkbox"]')
        .forEach((t) => {
          t.checked = !1;
        }),
      B(),
      s());
  }
  function se() {
    let e = "breakfix";
    (H(e), M(e), L(e), g(e), U(), Y(), K("#template-select-wrapper"), Q());
    let t = document.getElementById("template-select"),
      l = document.getElementById("copy-btn"),
      o = document.getElementById("reset-btn");
    (t &&
      t.addEventListener("change", () => {
        ce();
        let a = t.value;
        M(a);
      }),
      l && l.addEventListener("click", X),
      o && o.addEventListener("click", ie),
      s());
  }
  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", se)
    : se();
})();
