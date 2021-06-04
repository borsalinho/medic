block("modal-bs4")(
  content()(function () {
    return this.ctx.content.map(function (item) {
      return [
        { 
          block: item.buttonBlock,
          elem: item.buttonElem,
          tag: "button",
          attrs: {
            type: "button",
            "data-toggle": "modal",
            "data-target": item.modalTarget,
          },
          content: item.buttonName,
        },
        {
          cls: "modal fade",
          attrs: {
            id: item.modalId,
            tabindex: "-1",
            "aria-hidden": "true",
          },
          content: {
            cls: "modal-dialog modal-dialog-centered modal-lg",
            content: {
              block: "modal-bs4",
              elem: "content",
              content: [
                {
                  elem: "close",
                  tag: "button",
                  attrs: {
                    type: "button",
                    "data-dismiss": "modal",
                    "aria-label": "Close",
                  },
                  content: {
                    tag: "span",
                    attrs: {
                      "aria-hidden": "true",
                    },
                    content: {
                      tag: "img",
                      attrs: {
                        src: "img/basket/x.png",
                        style: "width: 12px;height: 12px;",
                      },
                    },
                  },
                },
                {
                  block: "modal-bs4",
                  elem: "body",
                  content: {
                    // block: 'reception',
                    block: item.modalContent,
                  },
                },
              ],
            },
          },
        },
      ];
    });
  })
);
