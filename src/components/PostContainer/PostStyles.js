import styled from 'styled-components';

const Container = styled.div`
    width: 80%;
    margin: 20px auto 0 auto;
`
const PostHolder = styled.div`
    width: 60%;
    font-size: .8rem;
    margin: 0 auto 40px auto;
`
const PostHeaderContainer = styled.div`
    display: flex;
    margin-bottom: 10px;
`
const ImageCropper = styled.div`
    width: 40px;
    height: 40px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
`

const PostThumbnail = styled.img`
    display: inline;
    margin: 0 auto;
    margin-left: 0%;
    height: 100%;
    width: auto;
`
const PostHeader = styled.h2`
    font-size: .8rem;
    margin-left: 10px;
`

const PostImage = styled.img`
    width: 100%;
`
export { Container, PostHolder, PostHeaderContainer, ImageCropper, PostThumbnail, PostHeader, PostImage }