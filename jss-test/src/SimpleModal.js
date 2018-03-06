render () {
    const {
      onCloseRequest,
      children,
      sheet: { classes },
    } = this.props;
  
    return (
      <div className={classes.modalOverlay}>
        <div
          className={classes.modal}
          ref={node => (this.modal = node)}
        >
          <div className={classes.modalContent}>
            {children}
          </div>
        </div>
  
        <button
          type="button"
          className={classes.closeButton}
          onClick={onCloseRequest}
        />
      </div>
    );
  }