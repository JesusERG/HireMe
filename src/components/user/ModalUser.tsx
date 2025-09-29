import React from 'react';
import { Modal, View, Text, StyleSheet, Pressable } from 'react-native';
import { useTranslation } from 'react-i18next';

type Props = {
  visible: boolean;
  content: any;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmationModal: React.FC<Props> = ({
  visible,
  content,
  onConfirm,
  onCancel,
}) => {
  const { t } = useTranslation();

  return (
    <Modal
      visible={visible}
      transparent
      animationType={visible ? 'slide' : 'fade'}
      onRequestClose={onCancel}
    >
      <Pressable style={styles.overlay} onPress={onCancel}>
        <View style={styles.container}>
          <Text style={styles.message}>{content}</Text>

          <View style={styles.buttons}>
            <Pressable style={styles.cancelBtn} onPress={onCancel}>
              <Text style={styles.btnText}>{t('cancel')}</Text>
            </Pressable>
            <Pressable style={styles.confirmBtn} onPress={onConfirm}>
              <Text style={styles.btnText}>{t('confirm')}</Text>
            </Pressable>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default ConfirmationModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    position: 'absolute',
    width: '100%',
    height: '60%',
    bottom: 0,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  message: {
    fontSize: 15,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cancelBtn: {
    marginRight: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#ccc',
    borderRadius: 8,
  },
  confirmBtn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#007AFF',
    borderRadius: 8,
  },
  btnText: {
    color: '#fff',
    fontWeight: '500',
  },
});
