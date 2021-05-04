import { NgModule } from '@angular/core';
import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';  
import { ApolloLink } from 'apollo-link';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  
})

export class GraphqlModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    const errorLink = onError(({graphQLErrors, networkError}) => {
      if(graphQLErrors){
        console.log('Error graphQLErrors', graphQLErrors);
      }
      if(networkError){
        console.log('Error networkErrors', networkError);
      }
    });
    const uri = 'http://localhost:2002/graphql';
    const link = ApolloLink.from([
      errorLink,
      httpLink.create({uri})
    ]);
    apollo.create({
      link, 
      cache: new InMemoryCache()
    });
  }
}
