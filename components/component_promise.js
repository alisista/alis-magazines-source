import React, { Component } from "react"
import url from "url"
class ComponentP extends Component {
  constructor(props) {
    super(props)
    this.params = {}
    if (props.router != undefined) {
      this.params = props.router.query
    }
  }
  async set(state) {
    return await new Promise(res => {
      this.setState(state, res)
    })
  }
  async getJSOND(file_id, file_name) {
    return new Promise((res, rej) => {
      window.$.getJSON(
        `https://dl.dropboxusercontent.com/s/${file_id}/${file_name}.json`,
        json => {
          res(json)
        }
      ).fail(function(jqXHR, textStatus, errorThrown) {
        rej(errorThrown)
      })
    })
  }
}

export default ComponentP
