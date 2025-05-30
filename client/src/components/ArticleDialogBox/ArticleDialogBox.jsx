import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useMediaQuery, useTheme } from '@mui/material';
import './ArticleDialogBox.css'

function renderArticleSection(section) {
  const Tag = section.htmlElement || 'p';
  const className = section.classType || '';

  if (Tag === 'ul' && Array.isArray(section.contentArray)) {
    return (
      <ul className={className}>
        {section.contentArray.map((child, index) => (
          <li key={index}>{renderArticleSection(child)}</li>
        ))}
      </ul>
    );
  }

  if (Tag === 'button') {
    return (
      <button className={className}>
        {section.btnName}
      </button>
    );
  }

  return <Tag className={className}>{section.text}</Tag>;
}

export default function ArticleDialogBox({ isOpen, handleArticleView, article }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const scroll = 'paper';
  const descriptionElementRef = React.useRef(null);

  React.useEffect(() => {
    if (isOpen && descriptionElementRef.current) {
      descriptionElementRef.current.focus();
    }
  }, [isOpen]);

  return (
    <Dialog
      open={isOpen}
      onClose={() => handleArticleView(false)}
      scroll={scroll}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      id="scroll-dialog-description-container"
      fullScreen={isMobile}
      fullWidth
      maxWidth="md" 
    >
      <DialogTitle id="scroll-dialog-title">{article["article-title-main"]}</DialogTitle>
      <DialogContent 
        dividers={scroll === 'paper'}
      >
        <DialogContentText
          id="scroll-dialog-description"
          ref={descriptionElementRef}
          tabIndex={-1}
          component="div"
        >
          {Array.isArray(article['article-context']) &&
            article['article-context'].map((section, index) => (
              <React.Fragment key={index}>
                {renderArticleSection(section)}
              </React.Fragment>
            ))}
        </DialogContentText>
      </DialogContent>
      <DialogActions id='article-box-btn-container'>
        <button 
          className='article-box-btns' 
          onClick={() => handleArticleView(false)}
        >Close</button> 
      </DialogActions>
    </Dialog>
  );
}

ArticleDialogBox.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleArticleView: PropTypes.func.isRequired,
  article: PropTypes.shape({
    "article-title-main": PropTypes.string.isRequired,
    "article-context": PropTypes.arrayOf(PropTypes.object)
  }).isRequired
};
