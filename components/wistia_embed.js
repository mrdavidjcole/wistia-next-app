import Head from './head'
import Link from 'next/link'
import React from 'react'

class WistiaEmbed extends React.Component {
  render() {
    return (
      <div>
        <div className={`wistia_embed wistia_async_${this.props.hashedId} embedHost=fast.wistia.com`} style={{height: '360px', width: '640px'}}>&nbsp;</div>
      </div>
    )
  }

  componentDidMount() {
    console.log("this:", this)
    console.log("component mounted!")
    if (!document.getElementById("wistia_script")) {
      var wistiaScript = document.createElement("script");
      wistiaScript.id = "wistia_script"
      wistiaScript.type = "text/javascript"
      wistiaScript.src = "https://fast.wistia.dev/assets/external/E-v1.js"
      wistiaScript.async = true
      document.body.appendChild(wistiaScript);
    }

    window._wq = window._wq || [];
    _wq.push({
      id: this.props.hashedId,
      onReady: (video) => {
        this.handle = video
      }
    });
  }

  componentWillUnmount() {
    console.log("this.handle in componentWillUnmount:", this.handle);
    this.handle && this.handle.remove();
  }
}

export default WistiaEmbed
