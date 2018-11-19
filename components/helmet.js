import React, { Component } from "react"
import Head from "next/head"
const image_404 = "/static/images/404.jpg"

class COMMON_HELMET extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let site_title = "ALIS MAGAZINES"
    let subdomain = ""
    if (process.env.WAVES_NETWORK === "TESTNET") {
      subdomain = "testnet-"
      site_title = "ALIS MAGAZINES TESTNET"
    }

    let metas = []
    let title = this.props.title || `404ページ | ${site_title}`
    let desc = this.props.desc
    if (desc == undefined && desc != "") {
      desc =
        "史上初！マミぃさんに300AHTお支払いで描いていただいたハッカー部のイラストです。"
    }
    let image =
      this.props.image || `https://${subdomain}to.alishackers.club${image_404}`
    metas.push({ name: "twitter:card", content: "summary_large_image" })
    metas.push({ name: "twitter:site", content: "@alishackers" })
    metas.push({
      name: "twitter:image",
      content: image
    })
    metas.push({ name: "twitter:description", content: desc })
    metas.push({ name: "twitter:title", content: title })
    metas.push({ name: "og:title", content: title })
    metas.push({
      name: "og:image",
      content: image
    })
    metas.push({ name: "og:description", content: desc })
    metas.push({ name: "description", content: desc })
    metas.push({
      name: "keywords",
      content:
        "ALIS, ALISハッカー部, ハッカー部, ALIS HackerToken, 独自経済圏, トークンエコノミー, 暗号通貨, cryptocurrency, ハッカー部トークン, WAVES, 仮想通貨"
    })
    let links = []
    if (this.props.links != undefined) {
      for (let link of this.props.links) {
        links.push({
          rel: "stylesheet",
          type: "text/css",
          href: link
        })
      }
    } else {
      links = []
    }
    let metas_html = []
    for (let v of metas) {
      metas_html.push(<meta content={v.content} name={v.name} />)
    }
    let links_html = []
    for (let v of links) {
      metas_html.push(<link href={v.href} type={v.type} rel={v.rel} />)
    }

    return (
      <Head>
        <title>{title}</title>
        {metas_html}
        {links_html}
      </Head>
    )
  }
}

export default COMMON_HELMET
