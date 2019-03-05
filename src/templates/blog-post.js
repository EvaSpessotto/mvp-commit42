import React from "react"
import { Container, Header } from 'semantic-ui-react'
import { graphql } from "gatsby"
import Layout from '../components/layout'

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <Layout isHome={false}>
      <Container text style={{marginTop:'5%', marginBottom:'5%'}}>
        <Header as="h1">{post.frontmatter.title}</Header>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
      }
    }
  }
`