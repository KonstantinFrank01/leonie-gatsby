import React from "react"
import { SocialIcon } from "react-social-icons";

const Footer = () => (
    <div>
        <footer class="page-footer font-small special-color-dark pt-4">
                <div class="container">
                    <ul class="list-unstyled list-inline text-center mr-0 ml-0 mb-0">
                        <li class="list-inline-item">
                            <a class="btn-flaoting mx-1" href="mailto:t.stuetz@htl-leonding.ac.at">
                                <SocialIcon network="email" />
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="btn-flaoting mx-1" href="https://www.facebook.com/htlleonding/">
                                <SocialIcon network="facebook" />
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="btn-flaoting mx-1" href="https://www.youtube.com/channel/UC5zrWVUTmjnWqdl-2Dt0DVg">
                                <SocialIcon network="youtube" />
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="btn-flaoting mx-1" href="https://www.instagram.com/htlleonding/">
                                <SocialIcon network="instagram" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="footer-copyright text-center py-3"> 2019 HTL Leonding: 
                    <a href="http://www.htl-leonding.at/index.php?id=1561"> htl-leonding.at</a>
                </div>
        </footer>
    </div>
)

export default Footer