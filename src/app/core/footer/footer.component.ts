
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="page-footer font-small blue pt-4">

      <div class="container-fluid text-center text-md-left">

        <div class="row">

          <div class="col-md-6 mt-md-0 mt-3">
            <img src="assets/pictures/skull-purple.png" width="100" height="100"
              class="d-inline-block align-top">
          </div>

          <hr class="clearfix w-100 d-md-none pb-3">

          <div class="col-md-3 mb-md-0 mb-3">

            <h5 class="text-uppercase">Social</h5>

            <ul class="list-unstyled">
              <li>
                <a href="https://github.com/d3v0ps">GitHub</a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UC35_waW3xheFB9ex9ju0S7w">Youtube</a>
              </li>
              <li>
                <a href="https://streamlabs.com/d3v0ps/tip">Twitch Donations</a>
              </li>
              <li>
                <a href="https://www.amazon.es/hz/wishlist/ls/1TXD0U7HPEV2Y?ref_=wl_share">Amazon WishList</a>
              </li>
            </ul>

          </div>

          <div class="col-md-3 mb-md-0 mb-3">

            <h5 class="text-uppercase">Contact</h5>

            <ul class="list-unstyled">
              <li>
                <a href="mailto:aitorllj93@gmail.com">aitorllj93@gmail.com</a>
              </li>
            </ul>

          </div>

        </div>

      </div>

      <div class="footer-copyright text-center py-3">
        Made with ❤️ by Aitor Llamas Jiménez
      </div>

    </footer>
  `
})

export class FooterComponent {
}
