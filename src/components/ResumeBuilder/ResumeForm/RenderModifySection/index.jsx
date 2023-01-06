/* eslint-disable */
import PropTypes from 'prop-types';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Styles from './index.module.scss';

const Index = ({
  item, push, remove
}) =>
  (
    <>
      {
        item.initial ? (
          <div>
            <div
              onClick={() => push()}
              className={Styles.addSection}
            >
              <div className={Styles.iconContainer}>
                <AddCircleOutlineIcon color="white" />
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div
              onClick={() => remove()}
              className={Styles.deleteSection}
            >
              <div className={Styles.iconContainer}>
                <RemoveCircleOutlineIcon color="white" />
              </div>
            </div>
          </div>
        )
      }
    </>
  );
Index.defaultProps = {
  // nodeStack: [],
  // addNodeHandler: () => {},
  // removeNodeHandler: () => {},
  // parentId: '',
  // baseNode: () => {},
  // nestedNode: {},
  // companyId: '',
};

Index.propTypes = {
  // nodeStack: PropTypes.array,
  // addNodeHandler: PropTypes.func,
  // removeNodeHandler: PropTypes.func,
  // parentId: PropTypes.string,
  // baseNode: PropTypes.func,
  // nestedNode: PropTypes.object,
  // companyId: PropTypes.string,
};

export default Index;
