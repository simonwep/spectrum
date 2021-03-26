<h3 align="center">
    <img src="public/icons/maskable-1024x1024.png" alt="Logo" height="250">
</h3>

<h3 align="center">
    Audio Spectrum Analyzer
</h3>

<br/>

<p align="center">
  <a href="https://github.com/Simonwep/reinisch.io/actions?query=workflow%3ACI"><img
     alt="CI / CD Status"
     src="https://github.com/Simonwep/spectrum/workflows/CI/badge.svg"/></a>
  <a href="https://choosealicense.com/licenses/mit/"><img
     alt="License MIT"
     src="https://img.shields.io/badge/licence-MIT-ae15cc.svg"></a>
  <a href="https://github.com/sponsors/Simonwep"><img
     alt="Support me"
     src="https://img.shields.io/badge/github-support-6a15cc.svg"></a>
</p>

<p align="center">
  <a href="https://spectrum.reinisch.io">Drop an audio file and see it's acoustic spectrum!</a>
<p>

> This project is heavily inspired by [spek](https://github.com/alexkay/spek)!


### What is this?

This is a small audio spectrum analyzer that I made after I realized that [spek](https://github.com/alexkay/spek) is no longer actively maintained.
I also wondered if it was possible to make it more performant and portable.
To get both performance and cross-platform compatibility this has become a PWA and is using the browsers native audio API (which is fast!).
Unfortunately not all browsers support things like the [OfflineAudioContext](https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext) I need, therefore it only works on chromium-based browsers.

I'd say, pick any audio file and [try it out](https://spectrum.reinisch.io) :)

### Planned features
* [x] - Make it a PWA.
* [ ] - A better logo (I'm running out of ideas for material design, drop a PR if you have an idea :)).
* [ ] - Display bitrate and bit-depth (How? The audio API doesn't give me such information... this is currently fix).
* [ ] - Make sample-rate adjustable (Currently fix at 48k since I cannot read the audio's meta data).
