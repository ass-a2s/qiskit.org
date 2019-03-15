/**
 * @license
 *
 * Copyright (c) 2018, IBM.
 *
 * This source code is licensed under the Apache License, Version 2.0 found in
 * the LICENSE.txt file in the root directory of this source tree.
 */

import { LitElement, html, css } from 'lit-element';
import { localize } from '../pwa-helpers/i18next-localize-mixin.js';

import { i18next } from '../i18next.js';

import {
  SharedStyles,
  HeaderStyles,
  SectionStyles,
} from './app-shared-styles.js';
import {
  facebookIcon,
  githubIcon,
  mediumIcon,
  slackIcon,
  stackexchangeIcon,
  twitterIcon,
  youtubeIcon,
} from './app-icons.js';
import './vaadin-ibmq-styles/vaadin-button.js';

import { organizations, collaborators } from '../../data/supporters.js';

class PageHome extends localize(i18next)(LitElement) {
  static get properties() {
    return {
      organizations: { type: Array },
      collaborators: { type: Array },
    };
  }

  static get styles() {
    return [
      SharedStyles,
      HeaderStyles,
      SectionStyles,
      css`
        :host {
          --app-section-background-color: var(--app-primary-color);
        }

        .community .row .illustration {
          align-items: flex-start;
        }

        .social-networks-list {
          list-style: none;
          padding: 0;
          margin: -1em;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }

        .social-networks-list li {
          display: inline-flex;
          padding: 1em;
          box-sizing: border-box;
          width: 100%;
        }

        .social-networks-list li a {
          display: inline-flex;
        }

        .social-networks-list li a svg {
          fill: var(--app-primary-color);
        }

        .social-networks-list li .social-network {
          display: inline-flex;
          align-items: center;
        }

        .social-networks-list li .social-network .name {
          margin-left: 0.5em;
        }

        .supporting .description {
          margin-bottom: 2em;
          font-size: 1.1em;
        }

        .supporting .description p {
          max-width: 576px;
        }

        .supporters-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .supporters-list li .supporter {
          display: inline-flex;
          flex-direction: column;
        }

        .supporters-list li + li {
          margin-top: 1em;
        }

        .supporters-list li a {
          display: inline-flex;
          flex-direction: column;
        }

        .supporters-list li .name,
        .supporters-list li .institution {
          display: block;
        }

        .supporters-list li .institution {
          font-size: 0.9em;
          font-weight: 300;
        }

        @media (min-width: 400px) {
          .social-networks-list li {
            width: 50%;
          }
        }

        @media (min-width: 500px) {
          .supporters-list {
            column-count: 2;
            column-gap: 1em;
          }
        }

        @media (min-width: 560px) {
          .social-networks-list li {
            width: 33.333%;
          }
        }

        @media (min-width: 768px) {
          .news .row .illustration {
            align-items: center;
          }

          .social-networks-list li {
            width: 50%;
          }

          .supporters-list {
            column-count: 3;
          }
        }

        @media (min-width: 1024px) {
          .supporters-list {
            column-count: 4;
          }
        }
      `,
    ];
  }

  render() {
    // prettier-ignore
    const supportersListTemplate = html`
      <ul class="supporters-list">
        ${this.organizations.map(organization => html`
          <li>
            ${organization.url ? html`
              <a href="${organization.url}" target="_blank" rel="noopener">
                <span class="name">${organization.name}</span>
              </a>
            ` : html`
              ${organization.name}
            `}
          </li>
        `)}
        ${this.collaborators.map(collaborator => html`
          <li>
            ${collaborator.url ? html`
              <a href="${collaborator.url}" target="_blank" rel="noopener">
                <div class="supporter">
                  <span class="name">${collaborator.name}</span>
                  <span class="institution">${collaborator.institution}</span>
                </div>
              </a>
            ` : html`
              <div class="supporter">
                <span class="name">${collaborator.name}</span>
                <span class="institution">${collaborator.institution}</span>
              </div>
            `}
          </li>
        `)}
      </ul>
    `;

    // prettier-ignore
    return html`
      <header>
        <img src="images/qiskit-logo.png" .alt=${i18next.t('pages.home.altLogo')}>
        <div>
          <h1>
            ${i18next.t('pages.home.headerTitle')}
            <a
                href="https://pypi.python.org/pypi/qiskit"
                target="_blank"
                rel="noopener">
              <img
                  src="https://img.shields.io/pypi/v/qiskit.svg"
                  alt="Qiskit version badge"
                  width="78px"
                  height="20px">
            </a>
          </h1>
          <h2>${i18next.t('pages.home.headerSubTitle')}</h2>
          <div class="badges">
            <a
                href="https://github.com/Qiskit"
                target="_blank"
                rel="noopener"
                tabindex="-1">
              <vaadin-button theme="secondary small">${githubIcon} GitHub</vaadin-button>
            </a>
            <a
                href="https://join.slack.com/t/qiskit/shared_invite/enQtNDc2NjUzMjE4Mzc0LTMwZmE0YTM4ZThiNGJmODkzN2Y2NTNlMDIwYWNjYzA2ZmM1YTRlZGQ3OGM0NjcwMjZkZGE0MTA4MGQ1ZTVmYzk"
                target="_blank"
                rel="noopener"
                tabindex="-1">
              <vaadin-button theme="secondary small">${slackIcon} ${i18next.t('joinSlack')}</vaadin-button>
            </a>
          </div>
        </div>
      </header>

      <section class="news">
        <div class="row limited-width">
          <div class="column">
            <div class="description">
              <h3>${i18next.t('pages.home.newsQCampTitle')}</h3>
              <p>${i18next.t('pages.home.newsQCampDescription')}</p>
              <div class="actions">
                <a
                    href="https://qiskit.camp"
                    target="_blank"
                    rel="noopener"
                    tabindex="-1">
                  <vaadin-button theme="secondary">${i18next.t('pages.home.newsQCampButton')}</vaadin-button>
                </a>
              </div>
            </div>
          </div>
          <div class="column video">
            <div class="description">
              <h3>${i18next.t('pages.home.newsVideoTitle')}</h3>
              <p>${i18next.t('pages.home.newsVideoDescription')}</p>
              <div class="actions">
                <a href="https://www.youtube.com/watch?v=V3hXSftZuoc" tabindex="-1">
                  <vaadin-button theme="secondary">${i18next.t('pages.home.newsVideoButton')}</vaadin-button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="colored">
        <div class="row limited-width">
          <div class="description">
            <h3>${i18next.t('pages.home.tryTitle')}</h3>
            <p>${i18next.t('pages.home.tryDescription')}</p>
            <div class="actions">
              <a
                  href="https://mybinder.org/v2/gh/QISKit/qiskit-tutorial/master?filepath=index.ipynb"
                  target="_blank"
                  rel="noopener"
                  tabindex="-1">
                <vaadin-button theme="secondary">${i18next.t('pages.home.tryButton')}</vaadin-button>
              </a>
            </div>
          </div>
          <div class="illustration">
            <img src="images/try-and-learn.jpg" .alt=${i18next.t('pages.home.ibmQExperienceAltImage')}>
          </div>
        </div>
      </section>

      <section class="community">
        <div class="row limited-width">
          <div class="description">
            <h3>${i18next.t('pages.home.communityTitle')}</h3>
            <p>${i18next.t('pages.home.communityDescription')}</p>
          </div>
          <div class="illustration">
            <ul class="social-networks-list">
              <li>
                <a
                    href="https://qiskit.slack.com"
                    title="Slack community"
                    target="_blank"
                    rel="noopener">
                  <div class="social-network">${slackIcon} <span class="name">Slack</span></div>
                </a>
              </li>
              <li>
                <a
                    href="https://github.com/Qiskit"
                    title="GitHub organization"
                    target="_blank"
                    rel="noopener">
                  <div class="social-network">${githubIcon} <span class="name">GitHub</span></div>
                </a>
              </li>
              <li>
                <a
                    href="https://quantumcomputing.stackexchange.com/search?q=qiskit"
                    title="Stack Exchange community"
                    target="_blank"
                    rel="noopener">
                  <div class="social-network">${stackexchangeIcon} <span class="name">Stack Exchange</span></div>
                </a>
              </li>
              <li>
                <a
                    href="https://twitter.com/Qiskit"
                    title="Twitter profile"
                    target="_blank"
                    rel="noopener">
                  <div class="social-network">${twitterIcon} <span class="name">Twitter</span></div>
                </a>
              </li>
              <li>
                <a
                    href="https://medium.com/Qiskit"
                    title="Medium profile"
                    target="_blank"
                    rel="noopener">
                  <div class="social-network">${mediumIcon} <span class="name">Medium</span></div>
                </a>
              </li>
              <li>
                <a
                    href="https://www.youtube.com/Qiskit"
                    title="YouTube channel"
                    target="_blank"
                    rel="noopener">
                  <div class="social-network">${youtubeIcon} <span class="name">YouTube</span></div>
                </a>
              </li>
              <li>
                <a
                    href="https://www.facebook.com/Qiskit"
                    title="Facebook page"
                    target="_blank"
                    rel="noopener">
                  <div class="social-network">${facebookIcon} <span class="name">Facebook</span></div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="colored">
        <div class="row limited-width">
          <div class="description">
            <h3>${i18next.t('pages.home.ibmQExperienceTitle')}</h3>
            <p>${i18next.t('pages.home.ibmQExperienceDescription')}</p>
            <div class="actions">
              <a
                  href="https://quantumexperience.ng.bluemix.net/qx/editor"
                  title="IBM Q Experience"
                  target="_blank"
                  rel="noopener"
                  tabindex="-1">
                <vaadin-button theme="secondary">${i18next.t('pages.home.ibmQExperienceButton')}</vaadin-button>
              </a>
            </div>
          </div>
          <div class="illustration">
            <img src="images/ibm-q-experience.jpg" .alt=${i18next.t('pages.home.ibmQExperienceAltImage')}>
          </div>
        </div>
      </section>

      <section class="citation">
        <div class="row limited-width">
          <div class="description">
            <h3>${i18next.t('pages.home.citationTitle')}</h3>
            <p>
              ${i18next.t('pages.home.citationDescription')}
              <a href="https://raw.githubusercontent.com/Qiskit/qiskit/master/Qiskit.bib" title="BibTeX"
                target="_blank" rel="noopener">
                ${i18next.t('pages.home.bibtexLink')}
              </a>
            </p>
          </div>
        </div>
      </section>

      <section class="supporting">
        <div class="limited-width">
          <div class="description">
            <h3>${i18next.t('pages.home.supportingTitle')}</h3>
            <p>${i18next.t('pages.home.supportingDescription')}</p>
          </div>
          ${supportersListTemplate}
        </div>
      </section>
    `;
  }

  constructor() {
    super();

    this.organizations = organizations;
    this.collaborators = collaborators;
  }
}

window.customElements.define('page-home', PageHome);
