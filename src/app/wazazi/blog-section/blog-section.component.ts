import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Trypost } from '../../trypost';
import { SearchService } from '../../core/search.service';

import { Blogpost } from '../../blogpost';
import { BlogpostService } from '../../core/blogpost.service';

@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.css'],

  providers: [ BlogpostService, SearchService ],
})


export class BlogSectionComponent implements OnInit {

   showId = false;

   post: Blogpost = {   id:1,
                        title:'',
                        body:'', 
                        topic_id:2 }; 

   posts: Observable<Trypost[]>;
   private searchTerms = new Subject<string>();
   
   
   

   // link = 'http://api.tuseme.co.tz/api/v1/search/c?api_key=bc';
   //http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q= 
   
   constructor(
     private blogpostService: BlogpostService,
     private searchService: SearchService,
     private router: Router) { }
   
   giphies: Blogpost = this.searchService.giphies

   apost: string = this.searchService.message

   // Push a search term into the observable stream.
   //search(term: string): void {
   //this.searchTerms.next(term);}
 
   ngOnInit(): void {
    /*this.posts = this.searchTerms
      .debounceTime(300)        
      .distinctUntilChanged()   
      .switchMap(term => term   
    
        ? this.searchService.search(term)
        
        : Observable.of<Trypost[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Trypost[]>([]);
      });*/

      // this.getBlogpost(3)


      /*this.searchService.performSearch().subscribe((res: Response) => {
        this.giphies = res.json().data;        
        console.log(this.giphies);
    });*/
  }
     
 

   getBlogpost(id): void {
    this.blogpostService.getBlogpost(id).then(post => this.post = post);
  }

  toggleId() {
    this.showId = !this.showId;
  }

  
}
