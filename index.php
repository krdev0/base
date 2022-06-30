<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="dist/main.css"/>
    <script src="./src/js/util.js" defer></script>
    <script src="dist/bundle.js" defer></script>
</head>
<body>
<header class="header position-relative js-header ">
    <div class="header__container container max-width-lg">
        <div class="header__logo">
            <a href="#0">
                <svg width="104" height="30" viewBox="0 0 104 30"><title>Go to homepage</title>
                    <path d="M37.54 24.08V3.72h4.92v16.37h8.47v4zM60.47 24.37a7.82 7.82 0 01-5.73-2.25 8.36 8.36 0 01-2-5.62 8.32 8.32 0 012.08-5.71 8 8 0 015.64-2.18 8.07 8.07 0 015.68 2.2 8.49 8.49 0 012 5.69 8.63 8.63 0 01-1.78 5.38 7.6 7.6 0 01-5.89 2.49zm0-3.67c2.42 0 2.73-3 2.73-4.23s-.31-4.26-2.73-4.26-2.79 3-2.79 4.26.32 4.23 2.82 4.23zM95.49 24.37a7.82 7.82 0 01-5.73-2.25 8.36 8.36 0 01-2-5.62 8.32 8.32 0 012.08-5.71 8.4 8.4 0 0111.31 0 8.43 8.43 0 012 5.69 8.6 8.6 0 01-1.77 5.38 7.6 7.6 0 01-5.89 2.51zm0-3.67c2.42 0 2.73-3 2.73-4.23s-.31-4.26-2.73-4.26-2.8 3-2.8 4.26.31 4.23 2.83 4.23zM77.66 30c-5.74 0-7-3.25-7.23-4.52l4.6-.26c.41.91 1.17 1.41 2.76 1.41a2.45 2.45 0 002.82-2.53v-2.68a7 7 0 01-1.7 1.75 6.12 6.12 0 01-5.85-.08c-2.41-1.37-3-4.25-3-6.66 0-.89.12-3.67 1.45-5.42a5.67 5.67 0 014.64-2.4c1.2 0 3 .25 4.46 2.82V8.81h4.85v15.33a5.2 5.2 0 01-2.12 4.32A9.92 9.92 0 0177.66 30zm.15-9.66c2.53 0 2.81-2.69 2.81-3.91s-.31-4-2.81-4-2.81 2.8-2.81 4 .27 3.91 2.81 3.91zM55.56 3.72h9.81v2.41h-9.81z"
                          fill="var(--color-contrast-higher)"/>
                    <circle cx="15" cy="15" r="15" fill="var(--color-primary)"/>
                </svg>
            </a>
        </div>

        <button class="btn btn--subtle header__trigger js-header__trigger" aria-label="Toggle menu"
                aria-expanded="false" aria-controls="header-nav">
            <i class="header__trigger-icon" aria-hidden="true"></i>
            <span>Menu</span>
        </button>

        <nav class="header__nav js-header__nav" id="header-nav" role="navigation" aria-label="Main">
            <div class="header__nav-inner">
                <div class="header__label">Main menu</div>
                <ul class="header__list">
                    <li class="header__item"><a href="#0" class="header__link">About</a></li>
                    <li class="header__item"><a href="#0" class="header__link">Solutions</a></li>
                    <li class="header__item"><a href="#0" class="header__link" aria-current="page">Resources</a></li>
                    <li class="header__item"><a href="#0" class="header__link">Pricing</a></li>
                    <li class="header__item"><a href="#0" class="header__link">Contact</a></li>

                    <button class="reset user-menu-control" aria-controls="user-menu" aria-label="Toggle user menu">
                        <figure class="user-menu-control__img-wrapper radius-50%">
                            <img class="user-menu-control__img" src="./src/img/author-img-1.jpeg"
                                 alt="User picture">
                        </figure>

                        <div class="margin-x-xs user-menu__meta">
                            <p class="user-menu__meta-title text-sm line-height-1 padding-y-xxxxs font-semibold color-contrast-higher text-truncate">
                                Emily Ewing</p>
                        </div>

                        <svg class="icon icon--xxs" aria-hidden="true" viewBox="0 0 12 12">
                            <polyline points="1 4 6 9 11 4" fill="none" stroke="currentColor" stroke-linecap="round"
                                      stroke-linejoin="round" stroke-width="2"/>
                        </svg>
                    </button>

                    <menu id="user-menu" class="menu js-menu">
                        <li role="menuitem">
                            <a class="menu__content js-menu__content" href="#0">
                                <svg class="icon menu__icon" aria-hidden="true" viewBox="0 0 16 16">
                                    <circle cx="8" cy="3.5" r="3.5"/>
                                    <path d="M14.747,14.15a6.995,6.995,0,0,0-13.494,0A1.428,1.428,0,0,0,1.5,15.4a1.531,1.531,0,0,0,1.209.6H13.288a1.531,1.531,0,0,0,1.209-.6A1.428,1.428,0,0,0,14.747,14.15Z"/>
                                </svg>
                                <span>Profile</span>
                            </a>
                        </li>

                        <li role="menuitem">
                            <a class="menu__content js-menu__content" href="#0">
                                <svg class="icon menu__icon" aria-hidden="true" viewBox="0 0 16 16">
                                    <g fill="currentColor">
                                        <path d="M15.135,6.784c-1.303-0.326-1.921-1.818-1.23-2.969c0.322-0.536,0.225-0.998-0.094-1.316l-0.31-0.31 c-0.318-0.318-0.78-0.415-1.316-0.094c-1.152,0.691-2.644,0.073-2.969-1.23C9.065,0.258,8.669,0,8.219,0H7.781 c-0.45,0-0.845,0.258-0.997,0.865c-0.326,1.303-1.818,1.921-2.969,1.23C3.279,1.773,2.816,1.87,2.498,2.188l-0.31,0.31 C1.87,2.816,1.773,3.279,2.095,3.815c0.691,1.152,0.073,2.644-1.23,2.969C0.26,6.935,0,7.33,0,7.781v0.438 c0,0.45,0.258,0.845,0.865,0.997c1.303,0.326,1.921,1.818,1.23,2.969c-0.322,0.536-0.225,0.998,0.094,1.316l0.31,0.31 c0.319,0.319,0.782,0.415,1.316,0.094c1.152-0.691,2.644-0.073,2.969,1.23C6.935,15.742,7.331,16,7.781,16h0.438 c0.45,0,0.845-0.258,0.997-0.865c0.326-1.303,1.818-1.921,2.969-1.23c0.535,0.321,0.997,0.225,1.316-0.094l0.31-0.31 c0.318-0.318,0.415-0.78,0.094-1.316c-0.691-1.152-0.073-2.644,1.23-2.969C15.742,9.065,16,8.669,16,8.219V7.781 C16,7.33,15.74,6.935,15.135,6.784z M8,11c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S9.657,11,8,11z"></path>
                                    </g>
                                </svg>
                                <span>Settings</span>
                            </a>
                        </li>

                        <li role="menuitem">
                            <a class="menu__content js-menu__content" href="#0">
                                <svg class="icon menu__icon" aria-hidden="true" viewBox="0 0 16 16">
                                    <circle cx="10.5" cy="2.5" r="2.5"/>
                                    <circle cx="5.5" cy="6.5" r="2.5"/>
                                    <path d="M15.826,10.124A5.455,5.455,0,0,0,9.46,6.107,3.932,3.932,0,0,1,9.5,6.5,3.97,3.97,0,0,1,8.452,9.176,6.963,6.963,0,0,1,11.539,12h2.829a1.5,1.5,0,0,0,1.458-1.876Z"/>
                                    <path d="M10.826,14.124a5.5,5.5,0,0,0-10.652,0A1.5,1.5,0,0,0,1.632,16H9.368a1.5,1.5,0,0,0,1.458-1.876Z"/>
                                </svg>
                                <span>Team</span>
                            </a>
                        </li>

                        <li class="menu__separator" role="separator"></li>

                        <li role="menuitem">
                            <a class="menu__content js-menu__content" href="#0">Logout</a>
                </ul>
            </div>
        </nav>
    </div>
</header>

<section class="hero padding-y-xxl" style="background-image: url('../../../app/assets/img/hero-img-1.jpg')">
    <div class="container max-width-adaptive-sm">
        <div class="text-center">
            <div class="text-component margin-bottom-sm">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vero aliquam, natus quae architecto
                    hic quod!</p>
            </div>

            <div class="flex flex-wrap flex-center gap-sm">
                <a href="#0" class="btn btn--primary">Download</a>
                <a href="#0" class="color-inherit">Learn more</a>
            </div>
        </div>
    </div>
</section>
</body>
</html>