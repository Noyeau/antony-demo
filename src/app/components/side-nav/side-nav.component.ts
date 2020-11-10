import { Component, OnInit, ViewChild, ContentChild, TemplateRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { map } from 'rxjs/Operators';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  @ContentChild(TemplateRef)
  templateRef: TemplateRef<any>;

  menuAnto = [
    {
      label: "Expérience",
      url: "experience"
    },
    {
      label: "Mes Compétences",
      url: "competences"
    },
    {
      label: "Mon CV",
      url: "cv"
    },
  ]


  menuProjets = [
    {
      label: "Noyeau API",
      url: "noyeau"
    },
    {
      label: "Robotique",
      url: "robotique"
    },
    {
      label: "Applications divers",
      url: "app-divers"
    },
  ]

  lienExterne = [
    {
      label: "GitHib",
      url: "https://github.com/Noyeau/"
    },
    {
      label: "NPM packages",
      url: "https://www.npmjs.com/~noyeau?tab=packages"
    }
  ]



  mode = 'side'
  opened = true;
  layoutGap = '64';
  fixedInViewport = true;

  public constructor(private bpo: BreakpointObserver) { }



  public ngOnInit(): void {
    const breakpoints = Object.keys(Breakpoints).map(key => Breakpoints[key])
    this.bpo.observe(breakpoints)
      .pipe(map(bst => bst.matches))
      .subscribe(matched => {


        console.log('matched');

        this.determineSidenavMode();
        this.determineLayoutGap();
      });
  }

  private determineSidenavMode(): void {
    if (
      this.isExtraSmallDevice() ||
      this.isSmallDevice()
    ) {
      this.fixedInViewport = false;
      this.mode = 'over';
      this.opened = false;
      return;
    }

    this.fixedInViewport = true;
    this.mode = 'side';
  }

  private determineLayoutGap(): void {
    if (this.isExtraSmallDevice() || this.isSmallDevice()) {
      this.layoutGap = '0';
      return;
    }

    this.layoutGap = '64';
  }

  public isExtraSmallDevice(): boolean {
    return this.bpo.isMatched(Breakpoints.XSmall);
  }

  public isSmallDevice(): boolean {
    return this.bpo.isMatched(Breakpoints.Small)
  }


  clickMenu() {
    console.log('clickMenu')
    if (
      this.isExtraSmallDevice() ||
      this.isSmallDevice()
    ) {
      this.opened = false;
      return;
    }
  }

}
