import { QuartzComponentConstructor } from "./types"

export default (() => {
  function Comments() {
    return (
      <script
        src="https://giscus.app/client.js"
        data-repo="hermin9804/my-notes"
        data-repo-id="R_kgDOL8hRWA"
        data-category="General"
        data-category-id="DIC_kwDOL8hRWM4CfbAQ"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="ko"
        crossorigin="anonymous"
        async
      ></script>
    )
  }

  return Comments
}) satisfies QuartzComponentConstructor
